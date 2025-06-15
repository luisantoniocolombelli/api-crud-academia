const app = require('./app');

// Configuração da porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
});