import { catchedErrorAsync } from "../utils/catchedErrorAsync.js";
import { getCharacters } from "./characters/getCharacters.controller.js";
import { createCharacter } from "./characters/createCharacter.controller.js";


export const controllers = {
    getCharacters: catchedErrorAsync(getCharacters),
    createCharacter: catchedErrorAsync(createCharacter)
}