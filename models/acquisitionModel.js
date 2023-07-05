import mongoose from "mongoose";

// create an schema
const AcquisitionSchema = new mongoose.Schema({
    isActive: Boolean,
    result:String,
    id: String,
    title: String,
    channel: String,
    episodeNumber: Number,
    start: String,
    end: String,
    hashTags: Array,
    igAccounts: Array,
});
 
const Acquisition = mongoose.model('acquisitions', AcquisitionSchema);
 
export { Acquisition}