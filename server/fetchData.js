import axios from "axios";

async function fetchData(event) {
  const TOKEN_IG = "EAAEkggfDZAdEBAPc7SOmPXAQFRR9zk1yROdvCZBdZB2ZBOozFS0Aw8h2d78hYlVRFJrrcCYIzXhTDrrJaIKjFebBkwi3efkAbGSZCOfLM1JP2fldRnwgJXwy1R8U98jsStyoU03WA7wKBxAAcokdoaIeHcTJCZChEkfsVgVTzizY5ZBT5Pl9UQgCP5mDkXytdjYHoZBzTFheBSBWriGKuqOLjSm9n4rGp4f6FbErsZBFJ3UtnVUXt4s0qjFYdXQEpVK6WG4Ku7GsJUGXwWTK1ZCJJ8";
  const USER_ID = "17841445473312638";
  const FIELDS = "caption,media_type,like_count,comments_count,permalink,timestamp";
  const ACCESS_TOKEN =
    "EAAEkggfDZAdEBALdKjnHwMlr4IRZAx474wERFmgIEM0bCCaZCuhZB7SDPb31tP3oBuLsSoULQiS69tFFLJp0Q59qJbvvpp37ZA5bdDTIBG3GeZBxFGOlpRMMUJDyHoFgLApz47e4pq5RRPt1B4GR1kVd4wnSBEIaWCGpPNmzMGnGrHy9eKERCX";
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
          //200 risultati dalla risposta iniziale
          let mergedResults = response?.data?.data.slice(0, 200);
          //chiamare le pagine successive 
          while (nextPage && mergedResults.length < 200) {
            const nextPageResponse = await axios.get(nextPage);
            const nextPageData = nextPageResponse?.data?.data;
            mergedResults.push(...nextPageData.slice(0, 200 - mergedResults.length));
          }
          //risultati uniti
          return mergedResults;
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