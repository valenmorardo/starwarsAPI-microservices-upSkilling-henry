import { Films } from "../../data/index.js";
import CustomError from "../../utils/customError.js";

import response from "../../utils/response.js";

const getFilms = async (req, res) => {
  const data = Films.list();

  if (!data) throw new CustomError("error", 400, "error to find films.");
  response(res, 200, data);
};

export default getFilms;