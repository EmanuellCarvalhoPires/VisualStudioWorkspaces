const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({

    chamado_id: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: false
    },
    comentario: {
        type: String,
        required: true
    },

}, { timestamps: true })

const Comentarios = mongoose.model('Comentarios', ComentarioSchema)

module.exports = Comentarios;