import mongoose from "mongoose";

const username = "alexdias";
const password = "alexdias";
const cluster = "cluster0.o4o10kx";
const dbname = "instagram";
 //connessione a db
mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
export {db};
