const customResponse = (res, statusCode, data) => {
  res.status(statusCode || 500).send({
    success: true,
    data,
  });
};

export default customResponse;
