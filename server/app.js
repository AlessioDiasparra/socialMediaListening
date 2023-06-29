import express from "express";
import cron from "node-cron";
import fetchData from "./source/api/fetchData.js";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { db } from "./db/conn.js";
import { PostHashtag } from "../models/hashtagModel.js";
import hashtagRouter from "../routes/hashtagRoutes.js";
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Abilita CORS
app.use(cors());
// Analizza i corpi delle richieste JSON
app.use(express.json());

// Serve i file statici dalla cartella build di React
app.use(express.static(join(__dirname, "../client/build")));

const PORT = process.env.PORT || 3001; // Puoi modificare la porta se necessario
const HOST = process.env.HOST || "localhost";

// CONNESSIONE AD ATLAS
db.on("error", console.error.bind(console, "errore di connessione a db: "));
db.once("open", function () {
  console.log("connesso ad atlas");
});

// TODO CRON SCHEDULER
//2 minuti
cron.schedule("*/2 * * * *", async () => {
 console.log("Inizio processo CRON e LOAD SU DATABASE");
  const data = await fetchData({'nike': 'nike'});
  console.log('dati da API :>> ', data);
  const {posts} = data?.data?.nike
  posts.forEach(post => {
    (async()=> {
      const hashtagPost = new PostHashtag(post);
      try {
        await hashtagPost.save();
        //response.send(hashtagPost);
        console.log('Post salvato con successo !')
      } catch (error) {
        //response.status(500).send(error);
      }
    })()
  });
  console.log("Processo ETL completato");
});

//* MIDDLEWARE CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", async function (req, res) {
  res.json({ message: "Ciao dal  server! route" });
});

/* app.get("/api", (req, res) => {
  res.json({ message: "Ciao dal  server! route api" });
}); */

//router hashtag
app.use("/hashtags", hashtagRouter);

// Rotta catch-all che restituisce il file index.html
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../client", "build", "index.html"));
});

//*ASCOLTA IL SERVER
app.listen(PORT, HOST, () => console.log(`Server in esecuzione su ${HOST}:${PORT}`));
