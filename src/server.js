import 'dotenv/config';
import { databaseConnection } from './database/database.js';
import app from './app.js';

const PORT = process.env.PORT;

databaseConnection();

app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
});