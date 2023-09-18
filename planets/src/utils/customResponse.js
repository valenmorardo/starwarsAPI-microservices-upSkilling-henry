const customResponse = (res, statusCode, data) => {
  res.status(statusCode || 500).send({
    status: 'succsess',
    data,
  });
};

export default customResponse
