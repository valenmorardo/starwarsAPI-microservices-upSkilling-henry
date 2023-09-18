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
import dotenv from 'dotenv'

const runApp = async () => {
	try {
		await startServer();
	} catch (err) {
		console.log('ERROR!!');
		console.log(err)
	}

	return true;
};
runApp();