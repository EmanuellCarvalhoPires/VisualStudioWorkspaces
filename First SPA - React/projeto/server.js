const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve os arquivos estáticos da pasta 'build'
app.use(express.static(path.join(__dirname, 'dist')));

// Rota padrão para servir o app React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});