import { Films } from "../../data/index.js";
import CustomError from "../../utils/customError.js";

import customResponse from "../../utils/customResponse.js";

import axios from 'axios'

const getFilms = async (req, res) => {
  const response = await axios.get("http://database:3005/Film");

  if (!response.data) throw new CustomError("error", 400, "error to find films.");
  customResponse(res, 200, response.data);
};

export default getFilms;