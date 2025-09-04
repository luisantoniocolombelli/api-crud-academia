require('dotenv').config();
import { databaseConnection } from './database/database';
import app from './app';

const PORT = process.env.PORT

databaseConnection();

app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
});