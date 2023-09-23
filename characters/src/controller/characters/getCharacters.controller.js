import { Characters } from "../../data/index.js";
import customResponse from "../../utils/customResponse.js";
import CustomError from "../../utils/customError.js";
import axios from "axios";

export const getCharacters = async (req, res) => {
  const response = await axios.get("http://database:3005/Character");

  console.log(response.data);

  if (!response.data)
    throw new CustomError("error", 400, "error to find characters");

  customResponse(res, 200, response.data);
};
