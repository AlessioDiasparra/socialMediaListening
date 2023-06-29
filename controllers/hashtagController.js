import { PostHashtag } from "../models/hashtagModel.js";
import fetchData from "../server/source/api/fetchData.js";
import axios from "axios";

export const getAllPosts = async (request, response) => {
  try {
    const hashtags = await PostHashtag.find({});
    response.status(200).send(hashtags);
  } catch (err) {
    console.log(err);
    response.status(500).send(err);
  }
};

//*aggiungere risultato a db
export const saveNewPost = async (request, response) => {
  const hashtagPost = new PostHashtag(request.body);
  try {
    await hashtagPost.save();
    response.send(hashtagPost);
  } catch (error) {
    response.status(500).send(error);
  }
};

//fetch tutti gli hashtag di un acquisition_id
export const getPostsByAcquisitionId = async (req, res) => {
  try {
    const hashtags = await PostHashtag.find({ acquisition_id: req.params.acquisition_id });
    res.status(200).send(hashtags);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

//post con più di 50 likes
export const getPostsFilterLikes = async (req, res) => {
  try {
    //greater than
    const hashtags = await PostHashtag.find({ likes: { $gte: req.params.filter } });
    res.status(200).send(hashtags);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//post con più di 50 likes e più di 50 comments
export const getPostsFilterLikesComments = async (req, res) => {
  try {
    const hashtags = await PostHashtag.find({ likes: { $gt: 50 }, comments: { $gt: 50 } });
    res.status(200).send(hashtags);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};


export const startAcquisitions = async (req, res) => {
  const HASHTAG_API_URL =
      "https://p68xx6hws2.execute-api.eu-north-1.amazonaws.com/develop/instagram-hashtags";
  const response = await axios.post(HASHTAG_API_URL, { [req.params.hashtag]: req.params.hashtag })
  /* const data = await fetchData({ [req.params.hashtag]: req.params.hashtag }); */
  if (response?.data?.data) {
    const { posts } = response?.data?.data[req.params.hashtag];
    try {
      posts.forEach(post => {
        (async () => {
          const hashtagPost = new PostHashtag(post);
            await hashtagPost.save();
        })();
      });
      res.status(200).send('Post salvati con successo!');
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

