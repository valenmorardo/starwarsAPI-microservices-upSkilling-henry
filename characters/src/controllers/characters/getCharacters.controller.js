import { Characters } from "../../data/index.js"
import { response } from "../../utils/response.js";

export const getCharacters = async (req, res) => {
        const characters = await Characters.list()
        response(res, 200, characters)
        
}