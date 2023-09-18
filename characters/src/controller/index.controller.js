import { getCharacters } from "./characters/getCharacters.controller.js";

import catchedErrorAsync from "../utils/catchedErrorAsync.js";

const controller = {
  getCharacters: catchedErrorAsync(getCharacters),
};
export default controller;
