const isDate = (prop) => {
  const regExp = /^(0[1-9]|[1-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2\d{4}$/;

  return regExp.test(prop);
};

export default isDate;