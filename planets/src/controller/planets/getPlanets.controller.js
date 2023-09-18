import { Planets } from "../../data/index.js";
import customResponse from "../../utils/customResponse.js";
import CustomError from "../../utils/CustomError.js";

const getPlanets = async (req, res) => {
  const data = Planets.list();

  if (!data) throw CustomError("error", 400, "error to find planets");

  customResponse(res, 200, data)
};

export default getPlanets;
