import validator from "validator";

const isArrayOfNumbers = (prop) => {
  if (!Array.isArray(prop)) {
    return false;
  }

  for (const element of prop) {
    if (!validator.isInt(element.toString())) return false;
  }

  return true;
};

export default isArrayOfNumbers;
