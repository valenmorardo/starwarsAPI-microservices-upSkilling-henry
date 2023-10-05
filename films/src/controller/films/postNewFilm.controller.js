import axios from "axios";
import CustomError from "../../utils/customError.js";
import customResponse from "../../utils/customResponse.js";

const postNewFilm = async (req, res) => {
  const dataNewFilm = req.body;

  const response = await axios.post(
    "http://database:3005/Film/create",
    dataNewFilm
  );

  if (!response.data)
    throw CustomError("error", 400, "error to insert new Film");

  customResponse(res, 200, { created: true, new_Film: response.data });
};

export default postNewFilm;
