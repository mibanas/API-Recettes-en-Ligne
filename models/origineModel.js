const { Schema, model } = require('mongoose')

const origine = new Schema({
    name : String,
})

const Origine = model('Origine', origine);

module.exports = Origine;