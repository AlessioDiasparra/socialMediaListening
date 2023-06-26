import express from 'express';
import cron from "node-cron";
import fetchData from './fetchData.js';
import cors from 'cors'
import { MongoClient } from 'mongodb';
import path from 'path';
import http from 'http'

const uri = "mongodb+srv://alexdias:alexdias@cluster0.o4o10kx.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {useUnifiedTopology: true});

/* async function run() {
  try {
    await client.connect();
    const database = client.db("sample_weatherdata");
    const data = database.collection("data");
  } finally {
    await client.close();
  }
} */

const app = express();
app.use(cors());
app.use(express.json());
//questo fa la build al client
app.use(express.static('client/build'));

const PORT = process.env.PORT || 3001; // Puoi modificare la porta se necessario
const HOST = process.env.HOST || "localhost"; 
//const router = express.Router();

// TODO CRON SCHEDULER
  //2 minuti
cron.schedule("*/2 * * * *", async () => {
 console.log("Inizio processo ETL");

  const data = await fetchData({'nike': 'nike'});
  console.log('data :>> ', data?.data);
  console.log("Processo ETL completato");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/", async(req, res) => {
  res.json({ message: "Ciao dal  server!" });
});


app.get("/api", (req, res) => {
  res.json({ message: "Ciao dal  server! route api" });
});

// All other GET requests not handled before will return our React app
/* app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
}); */

app.listen(PORT, HOST, () =>
  console.log(`Server running su  ${HOST}:${PORT}`),
); 