const express = require('express');
const mongoose = require('mongoose')
const Noc = require('./modules/noc')
const cors = require("cors")


const app = express();
app.use(express.json()); // Para interpretar JSON no corpo da requisição
app.use(cors()); // Permite requisições do frontend

//connection mongoDB
const dbURI = 'mongodb+srv://nocADM:04570072@portalnoc.8hfa3.mongodb.net/portalnoc?retryWrites=true&w=majority&appName=PortalNOC'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))




//Adicionando dados ao db mongo
//app.get('/add-noc', (req, res) => {
//    const nocDados = new Noc({
//        mvno: "BRPHONIA",
//        ticket: "213030",
//        descricao: "aaaaaaaaaaaaa",
//        prioridade: "10",
//        donofalha: "Sistemas",
//        status: true
//    });

//    nocDados.save()
//        .then((result) => {
//            res.send(result);
//        })
//        .catch((err) => {
//            console.log(err);
//        })
//})

//ROTA PARA REGISTRO DE TICKET

app.post('/registicket', async (req, res) => {
    try {
        const novoDado = new Noc(req.body);
        await novoDado.save();
        res.status(201).json({ message: "Dados salvos com sucesso!" });

    } catch (err) {
        res.status(500).json({ error: "Erro ao salvar os dados." });
    }
})

//ROTA PARA LISTAR DADOS

app.get('/listarTickets', async (req, res) => {
    try {
        const listaTickets = await Noc.find();
        res.json(listaTickets);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar chamados." });
    }
})
