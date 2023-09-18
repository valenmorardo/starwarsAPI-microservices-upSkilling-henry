const customResponse = (res, statusCode, data) => {
  res.status(statusCode || 500).send({
    status: "Succsess",
    data,
  });
};

export default customResponse;
