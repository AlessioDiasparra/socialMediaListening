import mongoose from "mongoose";
import { USERNAME, PASSWORD, CLUSTER, DATABASE } from "../constant.js";

 //connessione a db
mongoose.connect(
  `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}.mongodb.net/${DATABASE}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
export {db};
