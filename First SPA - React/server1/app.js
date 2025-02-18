const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors")
const Falhas = require("./routes/RotaFalhas")

const app = express();
app.use(express.json()); // Para interpretar JSON no corpo da requisição
app.use(cors()); // Permite requisições do frontend

//connection mongoDB
const dbURI = 'mongodb+srv://nocADM:04570072@portalnoc.8hfa3.mongodb.net/portalnoc?retryWrites=true&w=majority&appName=PortalNOC'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


app.use(Falhas);


//const atualizarTicket = await Noc.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: false });