// Mantém o array vazio e funções para manipular esse array
// Para salvar os cadastros sem persistência, vamos usar um array em memória

let registers = []

// Diferentes funções para manipular os cadastros
// Cadastro { id, name, email, phone, address, createdAt, updatedAt }
const registerModel = {
    // Busca todos os registros
    getAllRegisters() {
        return registers
    },

    // Busca um registro pelo ID
    getRegisterById(id) {
        return registers.find(register => register.id === id)
    },

    // Cria um novo registro
    createRegister(name, email, phone, address, training) {
        const newRegister = {
            id: registers.length + 1, // Simples ID incremental
            name,
            email,
            phone,
            address,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        return newRegister
    },

    // Salva um novo registro
    saveRegister(register) {
        registers.push(register)
    },

    // Atualiza um registro existente
    updateRegister(id, updatedRegister) {
        const index = registers.findIndex(register => register.id === id)
        registers[index] = { ...registers[index], ...updatedRegister, updatedAt: new Date() }
    },

    // Deleta um registro pelo ID
    deleteRegister(id) {
        registers = registers.filter(register => register.id !== id)
    },
}

module.exports = registerModel