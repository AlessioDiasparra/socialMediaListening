import express from "express";
import {
  getAllPosts,
  saveNewPost,
  getPostsByAcquisitionId,
  getPostsFilterLikes,
  getPostsFilterLikesComments
} from "../controllers/hashtagController.js";

const hashtagRouter = express.Router();

hashtagRouter.get("/all", getAllPosts);
hashtagRouter.post("/save", saveNewPost);
hashtagRouter.get("/:acquisition_id", getPostsByAcquisitionId);
hashtagRouter.get("/filter_likes/:filter", getPostsFilterLikes);
hashtagRouter.get("/likes_comments", getPostsFilterLikesComments);

export default hashtagRouter;
