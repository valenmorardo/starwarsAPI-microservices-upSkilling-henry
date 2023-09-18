import { Schema } from "mongoose";

const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
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
