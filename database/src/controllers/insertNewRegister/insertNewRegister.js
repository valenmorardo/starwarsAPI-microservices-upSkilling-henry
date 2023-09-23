import store from "../../database/index.js";
import customResponse from "../../utils/customResponse.js";

import CustomError from "../../utils/customError.js";
import validations from "../../utils/validations/index.validations.js";

const insertNewRegister = async (req, res, _next) => {
  const { model } = req.params;
  const dataNewRegister = req.body;
  const newRegister = await store[model].insert(dataNewRegister);
  customResponse(res, 201, newRegister);
};

export default insertNewRegister;
