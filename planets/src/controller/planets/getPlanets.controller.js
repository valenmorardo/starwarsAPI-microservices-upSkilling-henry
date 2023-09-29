import { Planets } from "../../data/index.js";
import customResponse from "../../utils/customResponse.js";
import CustomError from "../../utils/customError.js";
import axios from 'axios'

const getPlanets = async (req, res) => {
  const response = await axios.get("http://database:3005/Planet");

  if (!response.data) throw CustomError("error", 400, "error to find planets");

  customResponse(res, 200, response.data)
};

export default getPlanets;
