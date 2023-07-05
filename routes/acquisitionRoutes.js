import express from "express";
import {
 getAllAcquisitions, saveNewAcquisition, getAcquisitionsById, deleteAcquisitionById, updateAcquisition
} from "../controllers/acquisitionController.js";

const acquisitionRouter = express.Router();

acquisitionRouter.get("/all", getAllAcquisitions);
acquisitionRouter.post("/save", saveNewAcquisition);
acquisitionRouter.get("/:acquisition_id", getAcquisitionsById);
acquisitionRouter.put("/update/:acquisition_id", updateAcquisition);
acquisitionRouter.delete("/:acquisition_id", deleteAcquisitionById);

export default acquisitionRouter;