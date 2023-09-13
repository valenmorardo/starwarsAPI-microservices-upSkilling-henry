import { Router } from "express";
import { controller } from "../controller/index.controller.js";
const router = Router();

router.get("/", (req, res) => res.status(200).send("This is FILMS site"));

router.get('/films/getAll', controller.getFilms)



export default router;
