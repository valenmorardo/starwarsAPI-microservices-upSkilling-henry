import { Router } from "express";

import store from "../config/database/index.js";
import { validations } from "../middlewares/index.js";

const router = Router();

router.get("/:model", validations.validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list();
  res.status(200).send(response);
});

router.get('/:model/:id', validations.validateModel, async (req, res) => {
    const {model, id} = req.params;
    const response = await store[model].get(id);
    res.status(200).send(response)
});


export default router;
