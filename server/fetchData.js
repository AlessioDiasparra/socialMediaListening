import axios from "axios";

async function fetchData(event){
  const TOKEN_IG =
    "EAAEkggfDZAdEBAMg1CsGrTksylQGGw2vGl5rJZBRToT3Dhlk5BoiY9tcOZAAYoEoY9ZBvN0AZAYO7up3EZBF0fZCNOZAQFfMYH3WSHxPCTR1nIgyjYgeSrgS7wJQQjb7AaAZB1yK4HDmkH9hT0TDHRBa7JdZAevherrtlxGH0LnDezlBfP1fx1jVsKrtCD19VHUK6K63DTW0VvCILkQ6QpT9UmUQFUWhgH0z2hW9p4tvM1QoueZCkZA9ZAjI4HTTOaeJ8dcqB9ZBIvrTc0D4rQRkDbThu7";
  const USER_ID = "17841445473312638";
  const FIELDS = "caption,media_type,like_count,comments_count,permalink,timestamp";
  const ACCESS_TOKEN =
    "EAAEkggfDZAdEBALGkAS99U9F3qZBiZCeamYIMaZAmzKwXAo6bLdTbDvYmfnNKGSZBnRaEufNcTJa7KbpttxStYRKT9bJlH0XqpJ38yjXmfd6P1ZBUWcyje9ZAbByZCkHpl0362wlp1pfmZBowvaBJQQSLa6za1Rrl1hn6nvmExMvJLyTuEEBmW0kVPZBVTQD4nZCkQ8IUciEEMFQApkqmMqSxlYtKYtE0qNIkmVijKOiZCrzLgTAut3QdKwL";
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
          const response = await axios.get(requestPostHashtagUrl);

          //prossima pag
          let nextPage = response?.data?.paging?.next;
          //200 risultati dalla risposta iniziale
          const mergedResults = response?.data?.data.slice(0, 200);
          //chiamare le pagine successive 
          while (nextPage && mergedResults.length < 200) {
            const nextPageResponse = await axios.get(nextPage);
            const nextPageData = nextPageResponse?.data?.data;
            mergedResults.push(...nextPageData.slice(0, 200 - mergedResults.length));
            nextPage = nextPageResponse?.data?.paging?.next;
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
    console.log('response :>> ', response);
    return response;
  } catch (error) {
    const response = {
      status: 404,
      error: error
    };
    return response;
  }
}
export default fetchData;
