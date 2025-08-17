# API CRUD Academia

## 📋 Descrição do Projeto
API RESTful para gerenciamento de cadastros de uma academia, desenvolvida com Node.js, Express e MongoDB.

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- MongoDB
- Mongoose ODM
- dotenv

## 📦 Pré-requisitos
- Node.js (versão 14 ou superior)
- MongoDB
- NPM ou Yarn

## 🚀 Instalação

1. Clone o repositório
```bash
git clone https://github.com/luisantoniocolombelli/api-crud-academia.git
```

2. Instale as dependências
```bash
cd api-crud-academia
npm install
```

3. Crie o arquivo .env e configure as variáveis de ambiente


4. Inicie o servidor
```bash
npm start
```

## 📚 Documentação da API

### Endpoints

#### Criar Registro
```http
POST /registers
```
| Parâmetro | Tipo     | Descrição           |
| :-------- | :------- | :------------------ |
| `name`    | `string` | **Obrigatório**     |
| `email`   | `string` | **Obrigatório**     |
| `phone`   | `string` | **Obrigatório**     |
| `address` | `string` | **Obrigatório**     |

#### Listar Registros
```http
GET /registers
```

#### Buscar Registro por ID
```http
GET /registers/:id
```

#### Atualizar Registro
```http
PUT /registers/:id
```

#### Deletar Registro
```http
DELETE /registers/:id
```

### Exemplos de Requisição

#### Criar Novo Registro
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "address": "Rua Teste, 123"
}
```

## 📝 Estrutura do Projeto
```
api-crud-academia/
├── src/
│   ├── controllers/
|   ├── database/
│   ├── models/
│   ├── routes/
│   ├── app.js
|   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## ✒️ Autor
Luis Antonio Colombelli - [GitHub](https://github.com/luisantoniocolombelli)

## 📞 Contato
- LinkedIn: [Luis Antonio Colombelli](https://linkedin.com/in/luisantoniocolombelli)