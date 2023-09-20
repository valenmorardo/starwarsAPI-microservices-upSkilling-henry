import store from "../../database/index.js";
import CustomError from "../../utils/customError.js";
import customResponse from "../../utils/customResponse.js";

const listData = async (req, res, _next) => {
  const { model } = req.params;

  const data = await store[model].list();
  if (!data)
    throw new CustomError(`Error to find data of ${model}`, 404, `Data of ${model} not founded`);

  return customResponse(res, 200, data);
};

export default listData;
