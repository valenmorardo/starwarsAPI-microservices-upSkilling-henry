import { getCharacters } from "./characters/getCharacters.controller.js";

import { catchedErrorAsync } from "../utils/catchedErrorAsync.js";

export const controller = {
  getCharacters: catchedErrorAsync(getCharacters),
};
