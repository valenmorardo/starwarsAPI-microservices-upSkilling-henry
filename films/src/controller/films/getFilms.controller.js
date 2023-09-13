import { Films } from "../../data/index.js"

export const getFilms = async (req, res) => {
    res.send(Films.list());
}