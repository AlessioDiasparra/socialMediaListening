import express from "express";
import {
 getAllAcquisitions, saveNewAcquisition, getAcquisitionsById
} from "../controllers/acquisitionController.js";

const acquisitionRouter = express.Router();

acquisitionRouter.get("/all", getAllAcquisitions);
acquisitionRouter.post("/save", saveNewAcquisition);
acquisitionRouter.get("/:acquisition_id", getAcquisitionsById);

export default acquisitionRouter;
