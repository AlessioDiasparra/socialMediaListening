import mongoose from "mongoose";

//campo da aggiungere  acquisition_id: String,

// create an schema
const PostHashtagSchema = new mongoose.Schema({
    id: String,
    media_type: String,
    likes: Number,
    comments: Number,
    description: String,
    timestamp: String,
    link: String,
    acquisition_id: String
});
 
const PostHashtag = mongoose.model('posts_searched_hashtags', PostHashtagSchema);
 
export { PostHashtag}