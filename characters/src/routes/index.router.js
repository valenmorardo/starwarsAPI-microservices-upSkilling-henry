import { Router } from "express";
import controller from "../controller/index.controller.js";

const router = Router();

router.get("/", (req, res) => res.status(200).send("This is CHARACTERS site"));

router.get('/getCharacters', controller.getCharacters);
router.post('/newCharacter', controller.postNewCharacter);

export default router;
