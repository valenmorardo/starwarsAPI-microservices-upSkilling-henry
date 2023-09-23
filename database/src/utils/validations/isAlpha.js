import validator from "validator";

const isAlpha = (prop, options) => {
  return validator.isAlpha(prop.toString(), undefined, options);
};

export default isAlpha;
