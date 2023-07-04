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
/* import AWS from "aws-sdk";
import {
  PutRuleCommand,
  PutTargetsCommand,
  CloudWatchEventsClient,
  DescribeRuleCommand
} from "@aws-sdk/client-cloudwatch-events";

import {
  SchedulerClient,
  UpdateScheduleCommand,
  CreateScheduleCommand
} from "@aws-sdk/client-scheduler"; */


//configurazione variabili d'ambiente
dotenv.config();

const app = express();

// TODO GET ALL ACQUISITIONS (TOKEN INIETTATO, SESSIONE)
/*const axiosApiClient = axios.create({
  baseURL: process.env.SERVER_URL_ECO
});

 axiosApiClient.interceptors.request.use(
  config => {
    let token = process.env.TOKEN_ECO;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    if (error.response.status === 401) {
      token = "";
    }
  }
);
const respAllAcquisitions = await axiosApiClient.get("/getall");
// sintassi rinomina data + destructuring
const { data: acquisitions } = respAllAcquisitions;

//credenziali aws
AWS.config.update({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key,
  region: "eu-north-1"
});

const REGION = "eu-north-1";

// Setta la Region AWS
const cwEventsClient = new CloudWatchEventsClient({ region: REGION });
const schedulerClient = new SchedulerClient({ region: REGION });

//*modifica pianificatore
const updateScheduleParams = {
  Name: "rule_hashtags",
  ScheduleExpression: "rate(4 minutes)",
  State: "ENABLED",
  Target: {
    Arn: process.env.arn_hashtagStateMachine,
    RoleArn: process.env.role_arn_Amazon_EventBridge_Scheduler
  },
  FlexibleTimeWindow: {
    Mode: "FLEXIBLE",
    MaximumWindowInMinutes: 15
  }
}; */

//programma evento
/* const putRuleParams = {
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
}; */

//esecuzione SCHEDULER
/* const run = async () => {
  try {
    //cloudwatch event comando modifica regola
    const ruleResponse = await cwEventsClient.send(new PutRuleCommand(putRuleParams));
    console.log("Regola creata con successo: ", ruleResponse.RuleArn);
    //cloudwatch event comando modifica destinazione
    const targetsResponse = await cwEventsClient.send(new PutTargetsCommand(putTargetsParams));
    console.log("Destinazione assegnata correttamente: ", targetsResponse);
   const schedulerResponse = await schedulerClient.send(new CreateScheduleCommand(updateScheduleParams));
    console.log("Risposta pianificatore: ", schedulerResponse);

  } catch (err) {
    console.log("Error", err);
  }
};
run();*/

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

//router hashtag
app.use("/hashtags", hashtagRouter);

app.get("/", async function (req, res) {
  res.json({ message: "server in esecuzione" });
});

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../client", "build", "index.html"));
})

//*ASCOLTA IL SERVER
app.listen(PORT, HOST, () => console.log(`Server in esecuzione su ${HOST}:${PORT}`));
