import CustomError from "../../utils/customError.js";
import validations from "../../utils/validations/index.validations.js";
import fieldValidator from "../../utils/fieldValidator.js";

const validateNewDataCharacter = (data) => {
  Object.keys(data).forEach((key) => {
    switch (key) {
      case "name":
        fieldValidator(key, data[key], [
          (value) => validations.isAlphanumeric(value, { ignore: "-_ " }),
        ]);
        break;
      case "height":
        fieldValidator(key, data[key], [validations.isNumeric]);
        break;
      case "mass":
        fieldValidator(key, data[key], [validations.isNumeric]);
        break;
      case "hair_color":
        fieldValidator(key, data[key], [validations.isAlpha]);
        break;
      case "skin_color":
        fieldValidator(key, data[key], [validations.isAlpha]);
        break;
      case "eye_color":
        fieldValidator(key, data[key], [validations.isAlpha]);
        break;
      case "birth_year":
        fieldValidator(key, data[key], [validations.isDate]);
        break;
      case "gender":
        fieldValidator(key, data[key], [validations.isAlpha]);
        break;
      case "homeworld":
        fieldValidator(key, data[key], [validations.isNumeric]);
        break;
      case "films":
        fieldValidator(key, data[key], [validations.isArrayOfNumbers]);
        break;
    }
  });

  return true;
};

export default validateNewDataCharacter;
