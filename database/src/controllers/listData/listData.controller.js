import { Router } from "express";
import store from "../../database/index.js";

export const listData = async (req, res, next) => {
  const { model } = req.params;
  store[model].list().then((data) => {
    return res.status(200).send({
      success: true,
      data,
    });
  });
};