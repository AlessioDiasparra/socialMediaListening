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

//*aggiungere risultato a db
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
    const acquisition = await Acquisition.find({ id: req.params.acquisition_id });
    res.status(200).send(acquisition);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
