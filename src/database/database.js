import mongoose from 'mongoose';

export async function databaseConnection() {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('A variável de ambiente MONGO_URI não está definida.');
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Banco de dados conectado com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
        process.exit(1);
    }
};