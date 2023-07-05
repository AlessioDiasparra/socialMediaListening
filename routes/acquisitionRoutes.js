import express from "express";
import {
 getAllAcquisitions, saveNewAcquisition, getAcquisitionsById, deleteAcquisitionById, updateAcquisition
} from "../controllers/acquisitionController.js";

const acquisitionRouter = express.Router();

acquisitionRouter.get("/all", getAllAcquisitions);
acquisitionRouter.post("/save", saveNewAcquisition);
acquisitionRouter.get("/:id", getAcquisitionsById);
acquisitionRouter.put("/update/:id", updateAcquisition);
acquisitionRouter.delete("/:id", deleteAcquisitionById);

export default acquisitionRouter;