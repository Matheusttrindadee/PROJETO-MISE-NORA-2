const express = require('express');
const cors = require('cors');
const path = require('path'); // Importa o módulo path para gerenciar caminhos

const app = express();

app.use(express.json());
app.use(cors());

// Configura o Express para servir todos os arquivos estáticos (HTML, CSS, JS, imagens) da pasta raiz ou de assets
app.use(express.static(path.join(__dirname)));

// Rota principal para abrir o index.html quando acessarem a URL raiz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Suas outras rotas (cadastro, login, pedidos...) continuam aqui...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}...`);
});