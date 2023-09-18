import catchedErrorAsync from "../utils/catchedErrorAsync.js";

import getPlanets from "./planets/getPlanets.controller.js";

const controller = {
  getPlanets: catchedErrorAsync(getPlanets),
};

export default controller;
