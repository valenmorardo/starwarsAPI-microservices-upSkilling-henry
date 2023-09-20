import { Router } from "express";

import controller from "../controllers/index.controllers.js";
import middleware from "../middlewares/index.middlewares.js";
import store from "../database/index.js";

const router = Router();

router.get("/:model", middleware.validateModelParams, controller.listData);

router.get(
  "/:model/:id",
  middleware.validateModelParams,
  middleware.validateIdParams,
  controller.getDataById
);

router.post("/:model/create", (req, res) => {
  const { model } = req.params;

  store[model].insert(req.body).then((response) => {
    console.log(response);
    res.send(response);
  });
});

export default router;
