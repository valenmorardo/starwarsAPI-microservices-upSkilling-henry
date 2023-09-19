import { Schema } from "mongoose";

const planetSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "El nombre es obligatorio"],
  },
  rotation_period: {
    type: String,
    default: () => "Unknown",
  },
  orbital_period: {
    type: String,
    default: () => "Unknown",
  },
  diameter: {
    type: String,
    default: () => "Unknown",
  },
  climate: {
    type: String,
    default: () => "Unknown",
  },
  gravity: {
    type: String,
    default: () => "Unknown",
  },
  terrain: {
    type: String,
    default: () => "Unknown",
  },
  surface_water: {
    type: String,
    default: () => "Unknown",
  },
  res_idents: { 
    type: String,
    default: () => ["Unknown"],
    ref: "Character",
  },
  films: { 
    type: String, 
    default: () => ["Unknown"],
    ref: "Film",
  },
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("res_idents", ["name"])
    .populate("films", ["title"]);
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
  .populate("res_idents", ["name"])
  .populate("films", ["title"]);
};

planetSchema.statics.insert = async function (film) {
  return await this.create(film);
};

export default planetSchema;
