const fieldValidator = (key, value, validations) => {
  validations.forEach((element) => {
    if (!element(value))
      throw new Error(`El campo ${key} no esta escrito en el formato correcto`);
  });

  return true;
};

export default fieldValidator;
