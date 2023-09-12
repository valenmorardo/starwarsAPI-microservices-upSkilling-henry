// 	   /\_/\
//    ( o.o )
// 	   > ^ <
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//		─────▄████▀█▄
//		───▄█████████████████▄
//		─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
//		▄███████▄.▲.▲▲▲▲▲▲▲▲
//		████████████████████▀▀


import startServer from "./config/functions/startServer.js";

const runApp = async () => {
	try {
		await startServer();
		console.log('~~FILMS')

	} catch (err) {
		console.log('ERROR!!');
		console.log(err)
	}

	return true;
};
runApp();