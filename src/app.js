import express from 'express';
import memberRoutes from './routes/memberRoutes.js';

const app = express();

app.use(express.json());

app.use('/members', memberRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

export default app;