export const response = (res, statusCode, data) => {
  res.status(statusCode || 500).send({
    error: false,
    data,
  });
};
