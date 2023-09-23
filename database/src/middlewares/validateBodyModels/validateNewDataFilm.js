import CustomError from "../../utils/customError.js";
import validations from "../../utils/validations/index.validations.js";
import fieldValidator from "../../utils/fieldValidator.js";

const validateNewDataFilm = (data) => {
  Object.keys(data).forEach((key) => {
    switch (key) {
      case "title":
        fieldValidator(key, data[key], [
          (value) => validations.isAlphanumeric(value, { ignore: ":- " }),
        ]);
        break;
      case "opening_crawl":
        fieldValidator(key, data[key], [
          (value) => validations.isAlphanumeric(value, { ignore: ":-., " }),
        ]);
        break;
      case "director":
        fieldValidator(key, data[key], [
          (value) => validations.isAlpha(value, { ignore: ", " }),
        ]);
        break;
      case "producer":
        fieldValidator(key, data[key], [
          (value) => validations.isAlpha(value, { ignore: ", " }),
        ]);
        break;
      case "release_date":
        fieldValidator(key, data[key], [validations.isDate]);
        break;
      case "characters":
        fieldValidator(key, data[key], [validations.isArrayOfNumbers]);
        break;
      case "planets":
        fieldValidator(key, data[key], [validations.isArrayOfNumbers]);
        break;
    }
  });

  return true;
};

export default validateNewDataFilm;
