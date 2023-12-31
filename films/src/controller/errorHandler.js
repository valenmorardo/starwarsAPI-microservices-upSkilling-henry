const errorHandler = (
	error,
	_req,
	res,
	_next,
) => {
	const status = error.response ? error.response.status : error.status;
	console.log(error)

	return res.status(status || 500).send({
		message: error.message,
		error_data: error.error_data || error.response.data,
		aditional_data: error.aditional_data
	});
};


export default errorHandler