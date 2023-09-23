import CustomError from "../../utils/customError.js";
import validations from "../../utils/validations/index.validations.js";
import fieldValidator from "../../utils/fieldValidator.js";

const validateNewDataPlanet = (data) => {
  Object.keys(data).forEach((key) => {
    switch (key) {
      case "name":
        fieldValidator(key, data[key], [
          (value) => validations.isAlphanumeric(value, { ignore: "-_ " }),
        ]);
        break;
      case "rotation_period":
        fieldValidator(key, data[key], [validations.isNumeric]);
        break;
      case "orbital_period":
        fieldValidator(key, data[key], [validations.isNumeric]);
        break;
      case "diameter":
        fieldValidator(key, data[key], [validations.isNumeric]);
        break;
      case "climate":
        fieldValidator(key, data[key], [
          (value) => validations.isAlpha(value, { ignore: "-_, " }),
        ]);
        break;
      case "gravity":
        fieldValidator(key, data[key], [
          (value) => validations.isAlphanumeric(value, { ignore: "-_ " }),
        ]);
        break;
      case "terrain":
        fieldValidator(key, data[key], [
          (value) => validations.isAlphanumeric(value, { ignore: "-_, " }),
        ]);
        break;
      case "surface_water":
        fieldValidator(key, data[key], [validations.isNumeric]);
        break;
      case "res_idents":
        fieldValidator(key, data[key], [validations.isArrayOfNumbers]);
        break;
      case "films":
        fieldValidator(key, data[key], [validations.isArrayOfNumbers]);
        break;
    }
  });
  return true;
};

export default validateNewDataPlanet;
