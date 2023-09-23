import validateModelParams from "./validateModelParams.js";
import validateIdParams from "./validateIdParams.js";
import validateDataBody from "./validateDataBody.js";

const middleware = {
  validateModelParams,
  validateIdParams,
  validateDataBody,
};

export default middleware;
