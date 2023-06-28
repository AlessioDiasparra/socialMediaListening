import axios from "axios";

async function fetchData(event) {
  const TOKEN_IG = "EAAEkggfDZAdEBAMaP3mkbdDxsVolioMQU4QlsvNz1SFw36sB7rwoqx0xhe31TYFYoLDt4PqU4wvZAZAhHu6UZC0v1R63pBSf5oktZABUjdxZArpo2VCOaZCXxcnZC8spiLL9IaEd8wgV6uxIpqdCUDCkqznlsmDUdrvSJRclLgMKbkeZBhy4SxYd1nCkPlWndZAEKaPliJxZBBqdWgeP93j0iZCuHJCwifgrW7HCiJbhaZBCZB2dQR4OujcQyBEtjlJMmGxvVtRZAXUg7MC7DZBba5mQFHVF";
  const USER_ID = "17841445473312638";
  const FIELDS = "caption,media_type,like_count,comments_count,permalink,timestamp";
  const ACCESS_TOKEN =
    "EAAEkggfDZAdEBALIXVPg6s3Fs8IYEmvBPxOWp2tdtqMBfuCUvENbN2vci2bZBuTI6gGdhLMBbPfC5t6pLZCYZBOr5J4rzoG42uS2J0ZAVQpCKPT2QZBSoPb6zUuUfQ3KtmeyNJ8iB4OSpoPwKU1G4zmTvuId9yeijCeCCMZCwFIkEFxph8s1B9k";
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
            mergedResults.push(...nextPageData);

            if (mergedResults.length >= 200 || !nextPage || response?.data?.data.length === 0) {
              break;
            }
            nextPage = nextPageResponse?.data?.paging?.next;
          }
        //risultati uniti
        return mergedResults.slice(0,200);
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