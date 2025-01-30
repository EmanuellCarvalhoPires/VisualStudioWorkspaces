const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

// Middleware para permitir JSON no body da requisição
app.use(express.json());

// Configuração do CORS
app.use(cors({
    origin: ["http://localhost:5173"]
}));

// Conexão com o banco de dados
const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "portalnoc"
});

// 🚀 ROTA PARA INSERIR NOVA FALHA
app.post("/api/falhas/add", (req, res) => {
    const { mvno, ticket, descricao, prioridade, donofalha } = req.body;

    if (!mvno || !ticket || !descricao || !prioridade || !donofalha) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    const query = "INSERT INTO falhas (MVNO, TICKET, DESCRICAO, PRIORIDADE, DONOFALHA, STATUS) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(query, [mvno, ticket, descricao, prioridade, donofalha, 0], (err, result) => {
        if (err) {
            console.error("Erro ao inserir falha:", err);
            res.status(500).json({ error: "Erro ao registrar a falha." });
        } else {
            res.status(201).json({ message: "Falha registrada com sucesso!" });
        }
    });
});

// Iniciar o servidor
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});
