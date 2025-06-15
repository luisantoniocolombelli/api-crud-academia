// Contém as funções que executam as ações de cada rota
// Usa as funções do model para responder às requisições

const registers = require('../models/registerModel')

module.exports = {
    // GET /registers
    index(req, res) {
        const allRegisters = registers.getAllRegisters()
        res.json(allRegisters)
    },

    // GET por ID
    show: (req, res) => {
        const { id } = req.params
        const register = registers.getRegisterById(Number(id))
        if (!register) {
            return res.status(404).json({ error: 'Registro não encontrado' })
        }
        res.json(register)
    },

    // POST
    create: (req, res) => {
        const { name, email, phone, address } = req.body
        if (!name || !email || !phone || !address) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
        }
        const newRegister = registers.createRegister(name, email, phone, address)
        registers.saveRegister(newRegister)
        res.status(201).json(newRegister)
    },

    // PUT
    update: (req, res) => {
        const { id } = req.params
        const { name, email, phone, address } = req.body
        if (!name || !email || !phone || !address) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
        }
        const updatedRegister = { name, email, phone, address }
        registers.updateRegister(Number(id), updatedRegister)
        res.json({ message: 'Registro atualizado com sucesso' })
    },

    // DELETE
    delete: (req, res) => {
        const { id } = req.params
        registers.deleteRegister(Number(id))
        res.json({ message: 'Registro excluído com sucesso' })
    },
}