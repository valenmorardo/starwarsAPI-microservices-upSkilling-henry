import { Planets } from "../../data/index.js"

export const getPlanets = async (req, res) => {
    res.send(Planets.list());
}