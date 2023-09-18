import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import env from "../varEnvironments.js";
import express from "express";

import morgan from "morgan";

const server = express();

server.set("port", env.PORT);
server.use(bodyParser.json());
server.use(morgan("dev"));
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

import router from "../../routes/index.router.js";
const allRoutes = router;
server.use("/", allRoutes);

import errorHandler from "../../controllers/errorHandler.js";
import CustomError from "../../utils/CustomError.js";
server.use("*", (_req, _res) => {
  throw new CustomError("Not found", 404);
});
server.use(errorHandler);

export default server;
