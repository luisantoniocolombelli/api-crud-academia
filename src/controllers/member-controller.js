const Register = require('../models/registerModel');

module.exports = {
    async index(req, res) {
        try {
            const allRegisters = await Register.find();
            res.json(allRegisters);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar registros' });
        }
    },
    
    async create(req, res) {
        try {
            const { name, email, phone, address } = req.body;
            
            if (!name || !email || !phone || !address) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            }

            const newRegister = await Register.create({
                name,
                email,
                phone,
                address
            });

            res.status(201).json(newRegister);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar registro' });
        }
    },

    async read(req, res) {
        try {
            const { id } = req.params;
            const register = await Register.findById(id);
            
            if (!register) {
                return res.status(404).json({ error: 'Registro não encontrado' });
            }

            res.json(register);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar registro' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, phone, address } = req.body;

            if (!name || !email || !phone || !address) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            }

            const updatedRegister = await Register.findByIdAndUpdate(
                id,
                { name, email, phone, address },
                { new: true }
            );

            if (!updatedRegister) {
                return res.status(404).json({ error: 'Registro não encontrado' });
            }

            res.json(updatedRegister);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar registro' });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const deletedRegister = await Register.findByIdAndDelete(id);

            if (!deletedRegister) {
                return res.status(404).json({ error: 'Registro não encontrado' });
            }

            res.json({ message: 'Registro excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir registro' });
        }
    }
};