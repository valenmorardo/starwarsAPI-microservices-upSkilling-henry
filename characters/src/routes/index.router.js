import { Router } from "express";
import * as controllers from '../controllers/index.controller.js'

const router = Router();

router.get("/", (req, res) => res.status(200).send("This is CHARACTERS site"));

router.get('/characters/getAll', controllers.getCharacters)



export default router;
