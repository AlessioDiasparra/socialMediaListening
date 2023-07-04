import { PostHashtag } from "../models/hashtagModel.js";
import AWS from "aws-sdk";
import * as dotenv from "dotenv";
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
} from "@aws-sdk/client-scheduler";
import axios from "axios";

//configurazione variabili d'ambiente
dotenv.config();

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

export const getAllPosts = async (request, response) => {
  try {
    const hashtags = await PostHashtag.find({});
    response.status(200).send(hashtags);
  } catch (err) {
    console.log(err);
    response.status(500).send(err);
  }
};

//*aggiungere risultato a db
export const saveNewPost = async (request, response) => {
  const hashtagPost = new PostHashtag(request.body);
  try {
    await hashtagPost.save();
    response.send(hashtagPost);
  } catch (error) {
    response.status(500).send(error);
  }
};

//fetch tutti gli hashtag di un acquisition_id
export const getPostsByAcquisitionId = async (req, res) => {
  try {
    const hashtags = await PostHashtag.find({ acquisition_id: req.params.acquisition_id });
    res.status(200).send(hashtags);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

//post con più di 50 likes
export const getPostsFilterLikes = async (req, res) => {
  try {
    //greater than
    const hashtags = await PostHashtag.find({ likes: { $gte: req.params.filter } });
    res.status(200).send(hashtags);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//post con più di 50 likes e più di 50 comments
export const getPostsFilterLikesComments = async (req, res) => {
  try {
    const hashtags = await PostHashtag.find({ likes: { $gt: 50 }, comments: { $gt: 50 } });
    res.status(200).send(hashtags);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};


export const getPostsByAcquisitionIdFilterLikes = async (req, res) => {
  //filtri params
  const acquisitionId = req.params.acquisition_id;
  const filter = Number(req.params.filter);

  try {
    // Assumendo che Post sia un modello Mongoose
    const posts = await PostHashtag.find({acquisition_id: acquisitionId, likes: { $gt: filter }});

    res.status(200).send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// API per creare uno scheduler
export const createScheduler = async (req, res) => {
  try {
    // Setta la Region AWS
    const cwEventsClient = new CloudWatchEventsClient({ region: REGION });
    const schedulerClient = new SchedulerClient({ region: REGION });
   
    await Promise.all(
      acquisitions.map(async a => {
        const ruleName = `rule_hashtags_${a.hashTags[0]}_${a.id}`;
  
        const inputHashtagEvent = a?.hashTags.reduce((obj, item) => {
          obj["acquisition_id"] = a.id;
          obj[item] = item;
          return obj;
        }, {});
  
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
            Mode: "FLEXIBLE",
            MaximumWindowInMinutes: 15
          }
        };
  
        console.log("Il pianificatore non esiste, creazione in corso...");
        const schedulerResponse = await schedulerClient.send(
          new CreateScheduleCommand(createScheduleParams)
        );
       
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
  
        const targetsResponse = await cwEventsClient.send(new PutTargetsCommand(putTargetsParams));
        console.log("Destinazione assegnata correttamente: ", targetsResponse);
        
        console.log("Risposta pianificatore: ", schedulerResponse);
      })
    ).then(()=>{
      res.status(200).send("scheduler creato con successo");
    });
   
  } catch (error) {
    console.error(error);
    res.status(500).send('Errore nella creazione dello scheduler');
  }
};


