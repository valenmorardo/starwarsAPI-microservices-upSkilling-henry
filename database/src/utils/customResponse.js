const customResponse = (res, statusCode, data) => {
  res.status(statusCode || 500).send(data);
};

export default customResponse;
