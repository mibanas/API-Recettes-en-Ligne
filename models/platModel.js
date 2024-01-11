const { Schema, model } = require('mongoose')

const platSchema = new Schema ({
    nom : String,
    origine: { type: Schema.Types.ObjectId, ref: 'Origine' },
    ingredients : [String],
    popularite : Number,
    image : String
})

const Plate = model('Recipe', platSchema);

module.exports = Plate;