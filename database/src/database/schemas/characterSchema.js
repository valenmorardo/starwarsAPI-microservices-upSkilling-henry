import { Schema } from "mongoose";

const characterSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "El nombre es obligatorio"],
  },
  height: {
    type: String,
    default: () => "Unknown",
  },
  mass: {
    type: String,
    default: () => "Unknown",
  },
  hair_color: {
    type: String,
    default: () => "Unknown",
  },
  skin_color: {
    type: String,
    default: () => "Unknown",
  },
  eye_color: {
    type: String,
    default: () => "Unknown",
  },
  birth_year: {
    type: String,
    default: () => "Unknown",
  },
  gender: {
    type: String,
    default: () => "Unknown",
  },
  homeworld: {
    type: String,
    default: () => ["Unknown"],
    ref: "Planet",
  },
  films: {
    type: [String],
    default: () => ["Unknown"],
    ref: "Film",
  },
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["name"])
    .populate("films", ["title"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["name"])
    .populate("films", ["title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

export default characterSchema;
