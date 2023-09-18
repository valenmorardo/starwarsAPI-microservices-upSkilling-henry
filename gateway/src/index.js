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
import server from "./config/server.cfg.js";
import { createProxyMiddleware } from "http-proxy-middleware";

const runApp = async () => {
  try {
    await startServer();
    
  } catch (err) {
    console.log("ERROR!!");
    console.log(err);
  }

  return true;
};
runApp();

server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:3002",
    changeOrigin: true,
  })
);

server.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:3003",
    changeOrigin: true,
  })
);

server.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:3004",
    changeOrigin: true,
  })
);
