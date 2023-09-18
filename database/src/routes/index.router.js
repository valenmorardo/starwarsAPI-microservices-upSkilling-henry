import { Router } from "express";

import controller from '../controllers/index.controllers.js'
import middleware from "../middlewares/index.middlewares.js";

const router = Router();

router.get("/:model", middleware.validateModel, controller.listData);

router.get("/:model/:id", middleware.validateModel, controller.getDataById);

export default router;
