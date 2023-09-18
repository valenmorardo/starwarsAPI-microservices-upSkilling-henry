import { Router } from "express";

import * as controller from '../controllers/index.controllers.js'
import * as middlewares from "../middlewares/index.middlewares.js";

const router = Router();

router.get("/:model", middlewares.validateModel, controller.listData);

router.get("/:model/:id", middlewares.validateModel);

export default router;
