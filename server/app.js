import express from 'express';
import cron from "node-cron";
import fetchData from './fetchData.js';
import cors from 'cors'
/* import path from 'path';
import http from 'http'
import { fileURLToPath } from 'url'; */
import { db } from '../db/conn.js';
import { PostHashtag } from '../models/hashtagModel.js';

const app = express();
app.use(cors());
app.use(express.json());
//questo fa la build al client
app.use(express.static('client/build'));

const PORT = process.env.PORT || 3001; // Puoi modificare la porta se necessario
const HOST = process.env.HOST || "localhost"; 
//const router = express.Router();

db.on("error", console.error.bind(console, "errore di connessione a db: "));
db.once("open", function () {
  console.log("connesso ad atlas");
});

// TODO CRON SCHEDULER
  //2 minuti
//cron.schedule("*/2 * * * *", async () => {
/*  console.log("Inizio processo ETL");

  const data = await fetchData({'nike': 'nike'});
  console.log('data :>> ', data?.data);
  console.log("Processo ETL completato");
}); */

//* MIDDLEWARE CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', async function (req, res) {
  res.json({ message: "Ciao dal  server! route" });
}); 

app.get("/api", (req, res) => {
  res.json({ message: "Ciao dal  server! route api" });
});

//*aggiungere risultato a db
app.post("/add_hashtag", async (request, response) => {
  // esempio new
  const hashtagPost = new PostHashtag(request.body);
  try {
    await hashtagPost.save();
    response.send(hashtagPost);
  } catch (error) {
    response.status(500).send(error);
  }
});

// All other GET requests not handled before will return our React app
/* app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}); */

//*ASCOLTA IL SERVER
app.listen(PORT, HOST, () =>
  console.log(`Server in esecuzione su ${HOST}:${PORT}`),
); 