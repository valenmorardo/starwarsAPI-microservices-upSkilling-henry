import { getFilms } from "./films/getFilms.controller.js";

import { catchedErrorAsync } from "../utils/catchedErrorAsync.js";


export const controller = {
    getFilms: catchedErrorAsync(getFilms)
}