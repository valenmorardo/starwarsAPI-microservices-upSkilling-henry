import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const server = express();
server.use(morgan("dev"));

server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
  })
);

server.listen(process.env.PORT, () => {
  console.log(`GATEWAY on port --> ${process.env.PORT} `);
});
