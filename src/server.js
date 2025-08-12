require('dotenv').config();
const database = require('./database/database');
const app = require('./app');

const PORT = process.env.PORT

database();

app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}`);
});