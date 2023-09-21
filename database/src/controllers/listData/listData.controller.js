import store from "../../database/index.js";
import CustomError from "../../utils/customError.js";
import customResponse from "../../utils/customResponse.js";

const listData = async (req, res, _next) => {
  const { model } = req.params;

  const data = await store[model].list();
  return customResponse(res, 200, data);
};

export default listData;
