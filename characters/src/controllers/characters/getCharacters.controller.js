import { Characters } from "../../data/index.js"

export const getCharacters = async (req, res) => {
    res.send(Characters.list());
}