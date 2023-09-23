import { Schema } from "mongoose";

const planetSchema = new Schema({
  _id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
    required: [true, "El nombre es obligatorio"],
  },
  rotation_period: {
    type: Number,
  },
  orbital_period: {
    type: Number,
  },
  diameter: {
    type: Number,
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
    type: Number,
  },
  res_idents: {
    type: [Number],

    ref: "Character",
  },
  films: {
    type: [Number],

    ref: "Film",
  },
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("res_idents", ["name"])
    .populate("films", ["title"])
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new CustomError(
        "Error to list data of Planets",
        error.status,
        error.message
      );
    });
};

planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("res_idents", ["name"])
    .populate("films", ["title"])
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new CustomError("Error to get data of Planet", 404, error.message);
    });
};

planetSchema.statics.insert = function (newPlanet) {
  return this.find()
    .then((planets) => {
      const planetsTotales = planets.length;

      return this.create({
        _id: (planetsTotales + 2).toString(),
        name: newPlanet.name,
        rotation_period: newPlanet.rotation_period,
        orbital_period: newPlanet.orbital_period,
        diameter: newPlanet.diameter,
        climate: newPlanet.climate,
        gravity: newPlanet.gravity,
        terrain: newPlanet.terrain,
        surface_water: newPlanet.surface_water,
        residents: newPlanet.residents,
        films: newPlanet.films,
      });
    })
    .catch((error) => {
      throw new CustomError(
        "Error to insert planet",
        error.status,
        error.message
      ); // Lanzamos el error para que sea manejado en el controlador
    });
};

export default planetSchema;
