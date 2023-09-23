import CustomError from "../utils/customError.js";

import validateNewDataCharacter from "./validateBodyModels/validateNewDataCharacter.js";
import validateNewDataFilm from "./validateBodyModels/validateNewDataFilm.js";
import validateNewDataPlanet from "./validateBodyModels/validateNewDataPlanet.js";

const validateDataBody = (req, res, next) => {
  const { model } = req.params;
  const dataNewRegister = req.body;

  try {

    if (!Object.keys(dataNewRegister).length) {
      throw new CustomError("No hay body");
    }

    if (model === "Character") {
      validateNewDataCharacter(dataNewRegister);
      return next();
    }

    if (model === "Film") {
      validateNewDataFilm(dataNewRegister);
      return next();
    }

    if (model === "Planet") {
      validateNewDataPlanet(dataNewRegister);
      return next()
    }
  } catch (error) {
    throw new CustomError(`Error to insert new ${model}`, 400, error.message);
  }
};

export default validateDataBody;
