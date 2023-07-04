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
import {
  PutRuleCommand,
  PutTargetsCommand,
  CloudWatchEventsClient,
  DescribeRuleCommand
} from "@aws-sdk/client-cloudwatch-events";
/* import { StartExecutionCommand } from "@aws-sdk/client-sfn";
import { SFNClient } from "@aws-sdk/client-sfn"; */
import {
  SchedulerClient,
  UpdateScheduleCommand,
  CreateScheduleCommand
} from "@aws-sdk/client-scheduler";
import axios from "axios";
import { URL } from 'url';

//configurazione variabili d'ambiente
dotenv.config();

const app = express();

// TODO GET ALL ACQUISITIONS (TOKEN INIETTATO, SESSIONE)
const axiosApiClient = axios.create({
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
};

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
const run = async () => {
  await Promise.all(
    acquisitions.map(async a => {
      const ruleName = `rule_hashtags_${a.hashTags[0]}_${a.id}`;

      const inputHashtagEvent = a?.hashTags.reduce((obj, item) => {
        obj["acquisition_id"] = a.id;
        obj[item] = item;
        return obj;
      }, {});

      try {
        const describeRuleParams = { Name: ruleName };
        await cwEventsClient.send(new DescribeRuleCommand(describeRuleParams));
        console.log("Pianificatore esistente trovato: ", ruleName);
      } catch (err) {
        if (err.name === "ResourceNotFoundException") {

          //crea pianificatore
          const createScheduleParams = {
            Name: `rule_hashtags_${a.hashTags[0]}_${a.id}`,
            ScheduleExpression: "rate(8 minutes)",
            State: "ENABLED",
            /* StartDate: new Date("TIMESTAMP"),
            EndDate: new Date("TIMESTAMP"), */
            //destinazione STEP FUNCTION
            Target: {
              Arn: process.env.arn_hashtagStateMachine,
              RoleArn: process.env.role_arn_Amazon_EventBridge_Scheduler,
              //input di hashtag da passare
              Input: JSON.stringify(inputHashtagEvent)
            },
            FlexibleTimeWindow: {
              // FlexibleTimeWindow
              Mode: "FLEXIBLE",
              MaximumWindowInMinutes: 15
            }
          };

          console.log("Il pianificatore non esiste, creazione in corso...");
          const schedulerResponse = await schedulerClient.send(
            new CreateScheduleCommand(createScheduleParams)
          );
          console.log("Risposta pianificatore: ", schedulerResponse);

          //modifica regola
          const putRuleParams = {
            Name: ruleName,
            ScheduleExpression: "rate(2 minutes)",
            State: "ENABLED"
          };

          //modifica destinazione
          const putTargetsParams = {
            Rule: ruleName,
            Targets: [
              {
                Arn: process.env.arn_hashtagStateMachine,
                RoleArn: process.env.role_arn_Amazon_EventBridge_Scheduler,
                Id: "ac8784dc-1993-11ee-be56-0242ac120002",
                Input: JSON.stringify(inputHashtagEvent)
              }
            ]
          };

          const ruleResponse = await cwEventsClient.send(new PutRuleCommand(putRuleParams));
          console.log("Regola creata con successo: ", ruleResponse.RuleArn);

          const targetsResponse = await cwEventsClient.send(
            new PutTargetsCommand(putTargetsParams)
          );
          console.log("Destinazione assegnata correttamente: ", targetsResponse);
        } else {
          console.error("Errore durante la verifica dell'esistenza del pianificatore: ", err);
        }
      }
    })
  );
};



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

app.get("/", async function (req, res) {
  res.json({ message: "scheduler in esecuzione" });
});

/* app.get("/api", (req, res) => {
  res.json({ message: "Ciao dal  server! route api" });
}); */

run();
//router hashtag
app.use("/hashtags", hashtagRouter);


//*ASCOLTA IL SERVER
app.listen(PORT, HOST, () => console.log(`Server in esecuzione su ${HOST}:${PORT}`));

