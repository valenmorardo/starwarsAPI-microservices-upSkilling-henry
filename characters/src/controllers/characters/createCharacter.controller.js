import { Characters } from "../../data/index.js"

export const createCharacter = async (req, res) => {
        res.send(Characters.list());
}