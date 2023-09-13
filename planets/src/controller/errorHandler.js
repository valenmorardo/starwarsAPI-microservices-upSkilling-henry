export const errorHandler = (error, _req, res, _next) => {
  const status = error.response ? error.response.status : error.status;

  return res.status(status || 500).send({
    message: error.message,
    error_message: error.error_message,
    error_additionalData: error.additionalData,
  });
};
