import validator from "validator";

const isNumber = (prop) => {
  return validator.isInt(prop.toString());
};

export default isNumber;
