import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import env from "../varEnvironments.js";
import express from "express";
import morgan from "morgan";

import { createProxyMiddleware } from "http-proxy-middleware";


const server = express();

server.use(morgan("dev"));

server.set("port", env.PORT);
server.use(bodyParser.json());
server.use(express.json());
server.use(cookieParser());
// cargamos body parser que es un middleware para analizar cuerpos atravez de la url
server.use(bodyParser.urlencoded({ extended: false }));
// activamos el CORS para permitir las peticions AJAX y HTTP desde el front
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Authorization, X-API-KEY, Origin, X-Requested-With, Content-type, Accept, Access-Control-Request-Method, Access-Control-Allow-Request-Method, Access-Control-Request-Headers,  Access-Control-Allow-Origin"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Request-Headers", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, HEAD, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// PROXYS MIDDLEWARES
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

server.use("*", (_req, _res) => {
  throw new Error("URL Not found", 404);
});


export default server;
