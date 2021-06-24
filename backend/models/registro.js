const mongoose = require('../database');

const RegistroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    ingredients: {
        type: Array,
        required: true,
    },
});

const Registro = mongoose.model('Registro', RegistroSchema);

module.exports = Registro;