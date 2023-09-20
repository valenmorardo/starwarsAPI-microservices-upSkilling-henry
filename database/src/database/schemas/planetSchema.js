import { Schema } from "mongoose";

const planetSchema = new Schema({
  _id: {
    type: String,
    unique: true,
  },
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
    type: [String],
    default: () => ["Unknown"],
    ref: "Character",
  },
  films: {
    type: [String],
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

planetSchema.statics.insert = async function (newPlanet) {
  const planetsTotales = await this.find().then((planets) => {
    return planets.length;
  });

  return await this.create({
    _id: (planetsTotales + 2).toString(),
    name: newPlanet.name,
    rotation_period: newPlanet.rotation_period,
    orbital_period: newPlanet.orbital_period,
    diameter: newPlanet.diameter,
    climate: newPlanet.climate,
    gravity: newPlanet.gravity,
    terrain: newPlanet.terrain,
    surface_water: newPlanet.surface_water,
    res_idents: newPlanet.res_idents,
    films: newPlanet.films,
  });
};

export default planetSchema;
