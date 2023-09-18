import { Characters } from "../../data/index.js";
import response from "../../utils/response.js";
import CustomError from "../../utils/customError.js";

export const getCharacters = async (req, res) => {
  const data = Characters.list();

  if (!data) throw new CustomError("error", 400, "error to find characters");

  response(res, 200, data);
};
