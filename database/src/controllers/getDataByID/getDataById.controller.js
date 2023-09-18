import store from "../../database/index.js";
import CustomError from "../../utils/customError.js";
import response from "../../utils/response.js";

const getDataById = async (req, res, next) => {
  const { model, id } = req.params;

  const data = await store[model].get(id);
  if (!data)
    throw new CustomError("Error", 404, `Error to find data of ${model}`);

  return response(res, 200, data);
};

export default getDataById;
