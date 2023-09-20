const customResponse = (res, statusCode, data) => {
  res.status(statusCode || 500).send({
    status_message: "Succsess",
    data,
  });
};

export default customResponse;
