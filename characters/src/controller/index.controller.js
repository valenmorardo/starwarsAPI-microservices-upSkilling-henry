import { getCharacters } from "./characters/getCharacters.controller.js";
import postNewCharacter from "./characters/postNewCharacter.controller.js";
import catchedErrorAsync from "../utils/catchedErrorAsync.js";

const controller = {
  getCharacters: catchedErrorAsync(getCharacters),
  postNewCharacter: catchedErrorAsync(postNewCharacter),
};
export default controller;
