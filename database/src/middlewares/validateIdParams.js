import CustomError from "../utils/customError.js";
import validations from "../utils/validations/index.validations.js";

const validateIdParams = (req, res, next) => {
  const { id } = req.params;

  if (validations.isNumber(id)) {
    return next();
  }
  throw new CustomError("Error at ID", 400, "The ID must be a INT number");
};

export default validateIdParams;
