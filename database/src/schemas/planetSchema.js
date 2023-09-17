import { Schema } from 'mongoose';

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String ,
    surface_water: String,
    res_idents: [{type: String}],
    films: [{type: String, ref: "Film"}]
});


export default planetSchema;