import { getPlanets } from "./planets/getPlanets.controller.js";
import { catchedErrorAsync } from "../utils/catchedErrorAsync.js";

export const controller = {
    getPlanets: catchedErrorAsync(getPlanets)
}