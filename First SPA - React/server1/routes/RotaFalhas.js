const express = require('express');
const router = express.Router();

const Noc = require('../modules/noc')


//ROTA PARA REGISTRO DE TICKET

router.post('/Falhas/registicket', async (req, res) => {
    try {
        const novoDado = new Noc(req.body);
        await novoDado.save();
        res.status(201).json({ message: "Dados salvos com sucesso!" });

    } catch (err) {
        res.status(500).json({ error: "Erro ao salvar os dados." });
    }
})

//ROTA PARA BUSCAR AS INFORMAÇÕES DE UM TICKET

router.get('/Falhas/DetalhesTicket/:ticket', async (req, res) => {
    try {
        const { ticket } = req.params
        const registro = await Noc.findOne({ ticket: ticket });

        if (!registro) {
            return res.status(404).json({ message: 'Ticket não encontrado' });
        }

        res.json(registro)
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar chamados." });
    }
})


//ROTA PARA LISTAR TODOS OS TICKETS ABERTOS

router.get('/Falhas/listarTickets', async (req, res) => {
    try {
        const listaTickets = await Noc.find({ status: true });
        res.json(listaTickets);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar chamados." });
    }
})

//ROTA PARA LISTAR TICKETS FECHADOS

router.get('/Falhas/listarTicketsFechados', async (req, res) => {
    try {
        const listaTickets = await Noc.find({ status: false });
        res.json(listaTickets);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar chamados." });
    }
})

//ROTA PARA ATUALIZAR O STATUS DE UM TICKET

router.put('/Falhas/AtualizarStatus/:ticket', async (req, res) => {
    try {

        const { ticket } = req.params;
        const { status } = req.body



        // Encontra o chamado pelo nome e atualiza o status
        const chamadoAtualizado = await Noc.findOneAndUpdate(
            { ticket: ticket },           // Filtro para encontrar o documento
            { status: status },           // O campo a ser atualizado
            { new: false }                 // Retorna o documento atualizado
        );

        if (!chamadoAtualizado) {
            return res.status(404).json({ message: "Chamado não encontrado" });
        }
        return res.status(200).json({ message: "Chamado atualizado com sucesso", chamadoAtualizado });

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;