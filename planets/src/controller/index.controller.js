import catchedErrorAsync from "../utils/catchedErrorAsync.js";

import getPlanets from "./planets/getPlanets.controller.js";
import postNewPlanet from "./planets/postNewPlanet.controller.js";

const controller = {
  getPlanets: catchedErrorAsync(getPlanets),
  postNewPlanet: catchedErrorAsync(postNewPlanet)
};

export default controller;
