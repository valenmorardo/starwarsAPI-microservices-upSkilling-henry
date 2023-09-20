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
    .populate("planets", ["name"]);
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
  .populate("characters", [ "name"])
  .populate("planets", ["name"]);
};

filmSchema.statics.insert = async function (newFilm) {
  const filmsTotales = await this.find().then((films) => {
    return films.length;
  });

  return await this.create({
    _id: filmsTotales + 2,
    title: newFilm.title,
    opening_crawl: newFilm.opening_crawl,
    director: newFilm.director,
    producer: newFilm.producer,
    release_date: newFilm.release_date,
    characters: newFilm.characters,
    planets: newFilm.planets,

  });
};

export default filmSchema;
