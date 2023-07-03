import axios from "axios";

async function fetchData(event) {
  const TOKEN_IG = "EAAEkggfDZAdEBAHX2TkkYRYdqOShj0K7XWDa6xjy3nBzvI1Xzj3DC4ZB53oG5jZCWFJKJgP1oVZBBqMDIRWj8FHy1UGIP3F5cxmwGx4ZALmzRIG4k8OxXVaXNI6GDhYiE741buRbc1uLVdeSnkbUcHygectfs5HYz3eUGaQUkEKz4eQYMWpaVpgaptmiwcjs6It1gnZCDDkRzZCgbZA8HQoB18iEqZBSnumQZChZC6nhbOwxzg6C38ckX3seUweeFIT65I9oFKa1tYa5jQ0iX2XbwFz";
  const USER_ID = "17841445473312638";
  const FIELDS = "caption,media_type,like_count,comments_count,permalink,timestamp";
  const ACCESS_TOKEN =
    "EAAEkggfDZAdEBAPv7xbpBMw4jSeunUaomKozdxUJFD4CbgcwbQIot2ylr6kl6rAbPZBc9ovUVTHtha6C9WqNdhLGfztujuqJ2iXXZAlq1QvnuZCGQgU4hSsxzAPeDgCdZAV6ME0rrOIYrtYRHtf16oPBGDygy2M6yvaT4oJq3Yha4xEW3Oagw";
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
          let mergedResults = response?.data?.data.slice(0, 50);
          //chiamare le pagine successive 
          while (nextPage && mergedResults.length < 50) {
            const nextPageResponse = await axios.get(nextPage);
            const nextPageData = nextPageResponse?.data?.data;
            mergedResults.push(...nextPageData);

            if (mergedResults.length >= 50 || !nextPage || response?.data?.data.length === 0) {
              break;
            }
            nextPage = nextPageResponse?.data?.paging?.next;
          }
        //risultati uniti
        return mergedResults.slice(0,50);
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