import { PostHashtag } from "../models/hashtagModel.js";

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


export const getPostsByAcquisitionIdFilterLikes = async (req, res) => {
  //filtri params
  const acquisitionId = req.params.acquisition_id;
  const filter = Number(req.params.filter);

  try {
    // Assumendo che Post sia un modello Mongoose
    const posts = await PostHashtag.find({acquisition_id: acquisitionId, likes: { $gt: filter }});

    res.status(200).send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


