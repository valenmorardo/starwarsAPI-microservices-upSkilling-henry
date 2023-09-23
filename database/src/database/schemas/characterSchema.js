import { Schema } from "mongoose";
import CustomError from "../../utils/customError.js";

const characterSchema = new Schema({
  _id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
    required: [true, "El nombre es obligatorio"],
  },
  height: {
    type: Number,
  },
  mass: {
    type: Number,
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
    type: Number,

    ref: "Planet",
  },
  films: {
    type: [Number],

    ref: "Film",
  },
});

characterSchema.statics.list = function () {
  return this.find()
    .populate("homeworld", ["name"])
    .populate("films", ["title"])
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new CustomError(
        "Error to list data of Characters",
        error.status,
        error.message
      );
    });
};

characterSchema.statics.get = function (id) {
  return this.findById(id)
    .populate("homeworld", ["name"])
    .populate("films", ["title"])
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new CustomError(
        "Error to get data of Character",
        404,
        error.message
      );
    });
};

characterSchema.statics.insert = function (newCharacter) {
  return this.find()
    .then((personajes) => {
      const personajesTotales = personajes.length;

      return this.create({
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
    })
    .catch((error) => {
      throw new CustomError(
        "Error to insert Character",
        error.status,
        error.message
      ); // Lanzamos el error para que sea manejado en el controlador
    });
};

export default characterSchema;
