import validator from "validator";

const isNumeric = (prop, options) => {
  return validator.isNumeric((prop.toString()), undefined, options);
};

export default isNumeric;
