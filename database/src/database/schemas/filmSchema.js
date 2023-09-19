import { Schema } from "mongoose";

const filmSchema = new Schema({
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
    default: () => "Unknown",
  },
  characters: { 
    type: [String],
    default: () => ["Unknown"],
    ref: "Character",
  },
  planets: { 
    type: String,
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

filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

export default filmSchema;
