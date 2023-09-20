import CustomError from "../utils/customError.js";

const validateModelParams = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Film", "Planet"].includes(model)) {
    return next();
  } else {
    throw new CustomError(
      "Invalid model",
      400,
      "Los modelos disponibles son: 'Planet', 'Character', 'Film'"
    );
  }
};

export default validateModelParams;
