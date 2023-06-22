import express from 'express';
import cron from "node-cron";
import fetchData from './fetchData.js';
import cors from 'cors'
import { MongoClient, ServerApiVersion } from 'mongodb';
import path from 'path';

const uri = "mongodb+srv://alexdias:mGT1t7fgPP3cTDBv@cluster0.o4o10kx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//client.connect();
//const database = client.db('dbname')

const app = express();
/* app.use(cors());
app.use(express.json()); */
app.use(express.static('client/build'));

const port = process.env.PORT || 3001; // Puoi modificare la porta se necessario

app.get("/", (req, res) => {
  res.send('Hello World!')
  //2 minuti
  cron.schedule("*/2 * * * *", async () => {
    console.log("Inizio processo ETL");
    //TODO LEGGERE LE ACQUISIZIONI

    //TODO LOAD
    const data = await fetchData({'nike': 'nike'});
   
    res.send(JSON.stringify(data))
   
    console.log("Processo ETL completato");
  });
});


app.get("/api", (req, res) => {
  res.json({ message: "Ciao dal  server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () =>
  console.log('api running!'),
); 