import { Schema } from "mongoose";

const characterSchema = new Schema({
  _id: {
    type: String,
    unique: true,
  },
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
    default: () => "Unknown",
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

characterSchema.statics.insert = async function (newCharacter) {
  const personajesTotales = await this.find().then((personajes) => {
    return personajes.length;
  });

  return await this.create({
    _id: (personajesTotales + 2).toString(),
    name: newCharacter.name,
    height: newCharacter.height,
    mass: newCharacter.mass,
    hair_color: newCharacter.hair_color,
    skin_color: newCharacter.skin_color,
    eye_color: newCharacter.eye_color,
    birth_year: newCharacter.birth_year,
    gender: newCharacter.gender,
    homeworld: newCharacter.homeworld,
    films: newCharacter.films,
  });
};

export default characterSchema;
