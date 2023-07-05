import { PostHashtag } from "../models/hashtagModel.js";
import { Acquisition } from "../models/acquisitionModel.js";
import AWS from "aws-sdk";
import * as dotenv from "dotenv";
import { CloudWatchEventsClient, ListRulesCommand, PutRuleCommand, PutTargetsCommand } from "@aws-sdk/client-cloudwatch-events";
import { SchedulerClient, CreateScheduleCommand } from "@aws-sdk/client-scheduler"; 


//configurazione variabili d'ambiente
dotenv.config();

//credenziali aws
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
    const posts = await PostHashtag.find({ acquisition_id: acquisitionId, likes: { $gt: filter } });

    res.status(200).send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// API per creare uno scheduler
export const createScheduler = async (req, res) => {
  try {
    const cwEventsClient = new CloudWatchEventsClient({ region: REGION });
    const schedulerClient = new SchedulerClient({ region: REGION });

    // Recupera regole esistenti
    const existingRulesResponse = await cwEventsClient.send(new ListRulesCommand({}));
    const existingRules = existingRulesResponse.Rules.map(rule => rule.Name);
    const acquisitions = await Acquisition.find({});
    await Promise.all(
      acquisitions.map(async a => {
        const ruleName = `rule_hashtags_${a.hashTags[0]}_${a.id}`;
        const startDate = new Date(a?.start);
        const endDate = new Date(a?.end);
        const now = new Date();

        // Verifica se la regola esiste già
        if (existingRules.includes(ruleName) || startDate < now || endDate < now) {
          console.log(`Scheduler "${ruleName}" esiste gia or datainizio/datafine sono passate.`);
          return;
        }

         // Se la data fine si sta avvicinando chiama il mio endpoint
         const secondsToEndDate = (endDate.getTime() - now.getTime()) / 1000;
         if (secondsToEndDate <= 1) {
           //aggiunge risultato all'endpoint di eco
           const hashtags = await PostHashtag.find({ acquisition_id: a?.id });
           const resultData = JSON.stringify(hashtags);
           //TODO MODIFICA ACQUISIZIONE A DATABASE
           //aggiorna result con i risultati
           if (hashtags?.length > 0) {
            await Acquisition.updateOne({ id: a?.id }, { result: resultData });
           }
         }
          
        const inputHashtagEvent = a?.hashTags.reduce((obj, item) => {
          obj["acquisition_id"] = a.id;
          obj[item] = item;
          return obj;
        }, {});

        // Create scheduler
        const createScheduleParams = {
          Name: ruleName,
          ScheduleExpression: "rate(4 hours)", //ingestion ogni 4 ore
          State: "ENABLED",
          StartDate: new Date(a?.start),
          EndDate: new Date(a?.end),
          Target: {
            Arn: process.env.ARN_HASHTAG_STATE_MACHINE,
            RoleArn: process.env.ROLE_ARN_AMAZON_EVENTBRIDGE_SCHEDULER,
            Input: JSON.stringify(inputHashtagEvent)
          },
          FlexibleTimeWindow: {
            Mode: "FLEXIBLE",
            MaximumWindowInMinutes: 15
          }
        };

        console.log("Creazione nuovo scheduler...");
        const schedulerResponse = await schedulerClient.send(
          new CreateScheduleCommand(createScheduleParams)
        );

        // Modify rule
        const putRuleParams = {
          Name: ruleName,
          ScheduleExpression: "rate(50 minutes)",
          State: "ENABLED"
        };

        // Modify target
        const putTargetsParams = {
          Rule: ruleName,
          Targets: [
            {
              Arn: process.env.ARN_HASHTAG_STATE_MACHINE,
              RoleArn: process.env.ROLE_ARN_AMAZON_EVENTBRIDGE_SCHEDULER,
              Id: "ac8784dc-1993-11ee-be56-0242ac120002",
              Input: JSON.stringify(inputHashtagEvent)
            }
          ]
        };

        const ruleResponse = await cwEventsClient.send(new PutRuleCommand(putRuleParams));
        console.log("Regola creata con successo: ", ruleResponse.RuleArn);

        const targetsResponse = await cwEventsClient.send(new PutTargetsCommand(putTargetsParams));
        console.log("Target assegnato con successo: ", targetsResponse);

        console.log("Scheduler response: ", schedulerResponse);
      })
    ).then(() => {
      res.status(200).send("Scheduler creato con successo");
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in creating the scheduler");
  }
};
