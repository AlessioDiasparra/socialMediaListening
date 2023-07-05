import { Acquisition } from "../models/acquisitionModel.js";

export const getAllAcquisitions = async (request, response) => {
  try {
    const acquisitions = await Acquisition.find({});
    response.status(200).send(acquisitions);
  } catch (err) {
    console.log(err);
    response.status(500).send(err);
  }
};

export const saveNewAcquisition = async (request, response) => {
  const acquisition = new Acquisition(request.body);
  try {
    await acquisition.save();
    response.send(acquisition);
  } catch (error) {
    response.status(500).send(error);
  }
};

export const getAcquisitionsById = async (req, res) => {
  try {
    const acquisition = await Acquisition.find({ _id: req.params._id });
    res.status(200).send(acquisition);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const updateAcquisition = async (request, response) => {
  try {
    const acquisition = await Acquisition.updateOne({ _id: request.params._id }, request.body);
    if (acquisition.nModified == 0) {
      response.status(404).send("Nessuna acquisizione da aggiornare");
    } else {
      response.send(acquisition);
    }
  } catch (error) {
    response.status(500).send(error);
  }
};

export const deleteAcquisitionById = async (req, res) => {
  try {
    const result = await Acquisition.deleteOne({ _id: req.params._id });
    if (result.deletedCount === 0) {
      res.status(404).send("Nessuna acquisizione da eliminare");
    } else {
      res.send(`Eliminata acquisizione con id: ${req.params._id}`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
