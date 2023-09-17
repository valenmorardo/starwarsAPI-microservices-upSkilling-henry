import mongoose from "mongoose";
import env from "../varEnvironments.js";

import characterSchema from "../../schemas/characterSchema.js";
import filmSchema from "../../schemas/filmSchema.js";
import planetSchema from "../../schemas/planetSchema.js";

const conn = mongoose.createConnection(env.MONGO_URI);


export const conectionsSchemas = {
  Character: conn.model("Character", characterSchema),
  Film: conn.model("Film", filmSchema),
  Planet: conn.model("Planet", planetSchema),
};
