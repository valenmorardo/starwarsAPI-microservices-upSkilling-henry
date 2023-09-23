import { Router } from "express";

import controller from "../controllers/index.controllers.js";
import middleware from "../middlewares/index.middlewares.js";


const router = Router();

router.get("/:model", middleware.validateModelParams, controller.listData);

router.get(
  "/:model/:id",
  middleware.validateModelParams,
  middleware.validateIdParams,
  controller.getDataById
);

router.post("/:model/create", middleware.validateModelParams, middleware.validateDataBody, controller.insertNewRegister);

export default router;
