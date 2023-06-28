import axios from "axios";

async function fetchData(event) {
  const TOKEN_IG = "EAAEkggfDZAdEBAEBxtMo5MnDHaxg43Ro3GFeI2NwVPoofsDkjsPocRPlgU57U32O5Jt78JEbXG7xO5Jr91YNcueEZAZAyBm7Mph2X54Ei3jZCE5Scw65gtxfuBS47FSjTeIw6jGLCM2cYaAgxAs4La1ZAYPvwPMMguAgsNuZAIYpM4K1JmDfNoD1CZAQnZAEgA1ffDH8gX5Ix0Kkc5zhdh3ZAZA5CJYrRfZCBQ7TVtd6ZAMpicKKmRPHoZAzRzLHzPeuZAZBCZCwudb1gWFeErZBEa1l0uOuO";
  const USER_ID = "17841445473312638";
  const FIELDS = "caption,media_type,like_count,comments_count,permalink,timestamp";
  const ACCESS_TOKEN =
    "EAAEkggfDZAdEBAJOPEwKYn9ZB5ekXtFtuYHWqXxa0JlrI2SlAgQ6R6VeozUDIRxJnSZA6QND0FhqOlCMSYSAdGmkZAZC4IPoCl0nUzDH6sfNJv8joBLDZAZBNfDsKV8oJYCFNi2Vz39gittkoHO3r5dkrCvgOaUJ7jLZAqfEsbaTiNxl9NN8unFV";
  const BASE_REQUEST_FB = "https://graph.facebook.com/v14.0/";
  const config = {
    headers: {
      "Authorization": `Bearer ${TOKEN_IG}`
    }
  };
  try {
    //hashtag input
    const hashtagsInput = Object.values(event);
    const results = await Promise.all(
      hashtagsInput.map(async hashtag => {
        const searchResponseId = await axios.get(
          `${BASE_REQUEST_FB}ig_hashtag_search?user_id=${USER_ID}&q=${hashtag}`,
          config
        );
        const data = await searchResponseId?.data?.data;
        const idHashtag = data[0]?.id;
        if (idHashtag) {
          const requestPostHashtagUrl = `${BASE_REQUEST_FB}${idHashtag}/recent_media?user_id=${USER_ID}&fields=${FIELDS}&access_token=${ACCESS_TOKEN}`;
          const response = await axios.get(requestPostHashtagUrl, config);
          //prossima pag
          let nextPage = response?.data?.paging?.next;
          //100 risultati dalla risposta iniziale
          let mergedResults = response?.data?.data.slice(0, 100);
          //chiamare le pagine successive 
          while (nextPage && mergedResults.length < 100) {
            const nextPageResponse = await axios.get(nextPage);
            const nextPageData = nextPageResponse?.data?.data;
            mergedResults.push(...nextPageData);

            if (mergedResults.length >= 100 || !nextPage || response?.data?.data.length === 0) {
              break;
            }
            nextPage = nextPageResponse?.data?.paging?.next;
          }
        //risultati uniti
        return mergedResults.slice(0,100);
        } else {
          return [];
        }
      })
    );
   
    let response = {
      status: 200,
      data: {}
    };

    for (let i = 0; i < hashtagsInput.length; i++) {
      //schema risultato post
      const mappedResults = results[i].map(result => {
        return {
          id: result.id,
          mediaType: result.media_type,
          likes: result.like_count,
          comments: result.comments_count,
          description: result.caption,
          timestamp: result.timestamp,
          link: result.permalink
        }
      });
      //dati response
      response.data[hashtagsInput[i]] = {};
      //risultati
      response.data[hashtagsInput[i]].posts = mappedResults;
      response.data[hashtagsInput[i]].count_posts = mappedResults.length;
    }
    return response;
  } catch (error) {
    const response = {
      status: 404,
      error: error
    };
    return response;
  }
};

export default fetchData;