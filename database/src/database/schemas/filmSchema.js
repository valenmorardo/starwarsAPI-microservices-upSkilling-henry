import { Schema } from "mongoose";

const filmSchema = new Schema({
  _id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    unique: true,
    required: [true, "El titulo es obligatorio"],
  },
  opening_crawl: {
    type: String,
    default: () => "Unknown",
  },
  director: {
    type: String,
    default: () => "Unknown",
  },
  producer: {
    type: String,
    default: () => "Unknown",
  },
  release_date: {
    type: Date,
    default: () => Date.now(),
  },
  characters: {
    type: [String],
    default: () => ["Unknown"],
    ref: "Character",
  },
  planets: {
    type: [String],
    default: () => ["Unknown"],
    ref: "Planet",
  },
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["name"])
    .populate("planets", ["name"])
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new CustomError(
        "Error to list data of Films",
        error.status,
        error.message
      );
    });
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", ["name"])
    .populate("planets", ["name"])
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new CustomError(
        "Error to get data of Film",
        404,
        error.message
      );
    });
};

filmSchema.statics.insert = function (newFilm) {
  return this.find()
    .then((films) => {
      const filmsTotales = films.length;
      
      return this.create({
        _id: (filmsTotales + 2).toString(),
        title: newFilm.title,
        opening_crawl: newFilm.opening_crawl,
        director: newFilm.director,
        producer: newFilm.producer,
        release_date: newFilm.release_date,
        characters: newFilm.characters,
        planets: newFilm.planets,
      });
    })
    .catch((error) => {
      throw new CustomError("Error to insert film", error.status, error.message); // Lanzamos el error para que sea manejado en el controlador
    });
};


export default filmSchema;
