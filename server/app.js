import express from "express";
//import cron from "node-cron";
//import fetchData from "./source/api/fetchData.js";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { db } from "./db/conn.js";
//import { PostHashtag } from "../models/hashtagModel.js";
import hashtagRouter from "../routes/hashtagRoutes.js";
import acquisitionRouter from "../routes/acquisitionRoutes.js";
import * as dotenv from "dotenv";

//configurazione variabili d'ambiente
dotenv.config();

const app = express();

//crea uno scheduler per ogni acquisizione
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

//* MIDDLEWARE CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//ROTTE
app.use("/hashtags", hashtagRouter);
app.use("/acquisitions", acquisitionRouter);

app.get("/", async function (req, res) {
  res.json({ message: "server in esecuzione" });
});

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../client", "build", "index.html"));
})

//*ASCOLTA IL SERVER
app.listen(PORT, HOST, () => console.log(`Server in esecuzione su ${HOST}:${PORT}`));
