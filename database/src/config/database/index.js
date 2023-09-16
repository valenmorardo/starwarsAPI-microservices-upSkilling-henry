import mongoose from "mongoose";
import env from "../varEnvironments.js";

import characterSchema from '../../schemas/characterSchema.js'
const conn = mongoose.createConnection(env.MONGO_URI)

const Character = conn.model("Character", characterSchema);

/* Character.find().then((res) => console.log(res)) */