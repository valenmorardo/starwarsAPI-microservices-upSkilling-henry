import axios from "axios";
import CustomError from "../../utils/customError.js";
import customResponse from "../../utils/customResponse.js";

const postNewPlanet = async (req, res) => {
  const dataNewPlanet = req.body;

  const response = await axios.post(
    "http://database:3005/Planet/create",
    dataNewPlanet
  );

  if (!response.data)
    throw CustomError("error", 400, "error to insert new planet");

  customResponse(res, 200, { created: true, new_planet: response.data });
};

export default postNewPlanet;
