import express from "express";
//import cron from "node-cron";
//import fetchData from "./source/api/fetchData.js";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { db } from "./db/conn.js";
//import { PostHashtag } from "../models/hashtagModel.js";
import hashtagRouter from "../routes/hashtagRoutes.js";
import * as dotenv from "dotenv";
import AWS from "aws-sdk";
import { PutRuleCommand, PutTargetsCommand } from "@aws-sdk/client-cloudwatch-events";
import { CloudWatchEventsClient } from "@aws-sdk/client-cloudwatch-events";
import { StartExecutionCommand } from "@aws-sdk/client-sfn";
import { SFNClient } from "@aws-sdk/client-sfn";
//configurazione variabili d'ambiente
dotenv.config();

const app = express();

//credenziali aws
AWS.config.update({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key,
  region: "eu-north-1"
});

const REGION = "eu-north-1";

// Setta la Region AWS 
const cwEventsClient = new CloudWatchEventsClient({ region: REGION });
const sfnClient = new SFNClient({ region: REGION });

//progroamma evento
const putRuleParams = {
  Name: "rule_hashtags",
  ScheduleExpression: 'rate(3 minutes)',
  State: 'ENABLED'
};

//Destinazioni
const putTargetsParams = {
  Rule: "rule_hashtags",
  Targets: [
    {
      Arn: 'arn:aws:states:eu-north-1:543499486081:stateMachine:hashtagStateMachine',
      RoleArn: 'arn:aws:iam::543499486081:role/service-role/Amazon_EventBridge_Scheduler_SFN_b56c7002fa',
      Id: 'ac8784dc-1993-11ee-be56-0242ac120002',
    }
  ]
};

const startExecutionParams = {
  stateMachineArn: 'arn:aws:states:eu-north-1:543499486081:stateMachine:hashtagStateMachine', // replace with your state machine ARN
  input: JSON.stringify({
    "redbull": "redbull"
  })
};

//esecuzione step function
const run = async () => {
  try {
    const ruleResponse = await cwEventsClient.send(new PutRuleCommand(putRuleParams));
    console.log("Regola creata con successo: ", ruleResponse.RuleArn);
    const targetsResponse = await cwEventsClient.send(new PutTargetsCommand(putTargetsParams));
    console.log("Destinazione assegnata correttamente: ", targetsResponse);
    const executionResponse = await sfnClient.send(new StartExecutionCommand(startExecutionParams));
    console.log("Esecuzione iniziata con successo: ", executionResponse);
  } catch (err) {
    console.log("Error", err);
  }
};

run();

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
//cron.schedule("*/2 * * * *", async () => {
/*  console.log("Inizio processo CRON e LOAD SU DATABASE");
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
}); */

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
