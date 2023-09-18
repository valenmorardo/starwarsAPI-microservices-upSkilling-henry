import { Router } from "express";
import store from "../../database/index.js";

export const getDataById = async (req, res, next) => {
    const { model, id } = req.params;

    await store[model].get(id).then((response) => {
        console.log(response);
        return res.status(200).send({
            success: true,
            response,
        })
    })
}
