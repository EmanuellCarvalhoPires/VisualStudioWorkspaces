const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Noc = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true

    },
    body: {
        type: String,
        require: true
    }
}, { timestamps: true })

const NocData = mongoose.model('nocData', Noc)

module.exports = NocData;