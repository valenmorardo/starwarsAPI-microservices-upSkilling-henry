import getFilms from "./films/getFilms.controller.js";
import postNewFilm from "./films/postNewFilm.controller.js";

import catchedErrorAsync from "../utils/catchedErrorAsync.js";

const controller = {
  getFilms: catchedErrorAsync(getFilms),
  postNewFilm: catchedErrorAsync(postNewFilm)
};

export default controller;
