import { Characters } from "../../data/index.js";
import customResponse from "../../utils/customResponse.js";
import CustomError from "../../utils/customError.js";

export const getCharacters = async (req, res) => {
  var data = Characters.list();

  data = null

  if (!data) throw new CustomError("error", 400, "error to find characters");

  customResponse(res, 200, data);
};
