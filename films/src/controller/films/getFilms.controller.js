import { Films } from "../../data/index.js";
import CustomError from "../../utils/CustomError.js";

import customResponse from "../../utils/customResponse.js";

const getFilms = async (req, res) => {
  const data = Films.list();

  if (!data) throw new CustomError("error", 400, "error to find films.");
  response(res, 200, data);
};

export default getFilms;