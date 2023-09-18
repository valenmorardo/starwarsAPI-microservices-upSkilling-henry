import getFilms from "./films/getFilms.controller.js";

import catchedErrorAsync from "../utils/catchedErrorAsync.js";

const controller = {
  getFilms: catchedErrorAsync(getFilms),
};

export default controller;
