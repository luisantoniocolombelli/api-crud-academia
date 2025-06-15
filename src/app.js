const express = require('express');
const registerRoutes = require('./routes/registerRoutes');

const app = express();

// Middleware para permitir o uso de JSON no body das requisições
app.use(express.json());

// Configuração das rotas principais
app.use('/registers', registerRoutes);

// Middleware para lidar com rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

module.exports = app;