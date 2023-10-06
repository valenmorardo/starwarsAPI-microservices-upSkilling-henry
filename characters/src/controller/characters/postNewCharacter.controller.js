import axios from "axios";
import CustomError from "../../utils/customError.js";
import customResponse from "../../utils/customResponse.js";

const postNewCharacter = async (req, res) => {
  const dataNewCharacter = req.body;

  const response = await axios.post(
    "http://database:3005/Character/create",
    dataNewCharacter
  );

  if (!response.data)
    throw CustomError("error", 400, "error to insert new Character");

  customResponse(res, 200, { created: true, new_Character: response.data });
};

export default postNewCharacter;
