import store from "../../database/index.js";
import CustomError from "../../utils/customError.js";
import response from "../../utils/customResponse.js";

const getDataById = async (req, res, next) => {
  const { model, id } = req.params;

  const data = await store[model].get(id);

  return response(res, 200, data);
};

export default getDataById;
