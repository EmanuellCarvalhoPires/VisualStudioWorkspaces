const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Noc = new Schema({
    mvno: {
        type: String,
        required: true
    },
    ticket: {
        type: String,
        required: true

    },
    descricao: {
        type: String,
        require: true
    },
    prioridade: {
        type: String,
        require: true
    },
    donofalha: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    }
}, { timestamps: true })

const NocData = mongoose.model('nocData', Noc)

module.exports = NocData;