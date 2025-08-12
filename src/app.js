const express = require('express');
const registerRoutes = require('./routes/registerRoutes');

const app = express();

app.use(express.json());

app.use('/registers', registerRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

module.exports = app;