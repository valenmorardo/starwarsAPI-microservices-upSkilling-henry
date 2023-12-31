import { Router } from "express";
import controller from "../controller/index.controller.js";

const router = Router();

router.get("/", (req, res) => res.status(200).send("This is PLANETS site"));

router.get("/getPlanets", controller.getPlanets);
router.post("/newPlanet", controller.postNewPlanet);

export default router;
