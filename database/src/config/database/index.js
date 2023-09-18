import mongoose from "mongoose";
import env from "../varEnvironments.js";

import characterSchema from "../../schemas/characterSchema.js";
import filmSchema from "../../schemas/filmSchema.js";
import planetSchema from "../../schemas/planetSchema.js";

const conn = mongoose.createConnection(env.MONGO_URI);

const Character = conn.model("Character", characterSchema);
const Film = conn.model("Film", filmSchema);
const Planet = conn.model("Planet", planetSchema);

const store = {
    Character,
    Film,
    Planet
}

export default store;