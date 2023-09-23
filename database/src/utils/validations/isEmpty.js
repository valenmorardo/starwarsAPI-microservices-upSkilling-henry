import validator from "validator";

const isEmpty = (prop) => {
  return validator.isEmpty(prop.toString());
};

export default isEmpty;
