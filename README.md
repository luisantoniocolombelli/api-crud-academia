# API CRUD Academia v1.1

## Descrição do Projeto

API RESTful para gerenciamento de registro de membros de uma academia, desenvolvida com Node.js, Express e MongoDB.
Este projeto agora usa a arquitetura em camadas MVC + Repositories + Services e também um middleware de validação de dados.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose ODM
- dotenv
- Zod

## Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB
- MongoDB Compass ou a extensão do MongoDB para VSCode (auxilia na visualização dos dados manipulados)
- NPM ou Yarn

## Instalação

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

## Documentação da API

### Endpoints

#### Criar Registro

```http
POST /registers
```

| Parâmetro | Tipo     | Descrição         |
| :-------- | :------- | :---------------- |
| `name`    | `string` | **Obrigatório**   |
| `email`   | `string` | **Obrigatório**   |
| `phone`   | `number` | **Obrigatório**   |
| `address` | `string` | **Obrigatório**   |
| `status`  | `string` | **Ativo/Inativo** |
| `workout` | `string` | **Obrigatório**   |

#### Listar Registros

```http
GET /members
```

#### Buscar Registro por ID

```http
GET /members/:id
```

#### Atualizar Registro

```http
PATCH /members/:id
```

#### Deletar Registro

```http
DELETE /members/:id
```

### Exemplos de Requisição

#### Criar Novo Registro

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "address": "Rua Teste, 123",
  "status": "ativo",
  "workout": "Musculação"
}
```

## Estrutura do Projeto

```
api-crud-academia/
├── src/
│   ├── controllers/
|   ├── database/
│   ├── models/
|   ├── repositories/
│   ├── routes/
|   ├── schemas
│   ├── app.js
|   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Autor

Luis Antonio Colombelli - [GitHub](https://github.com/luisantoniocolombelli)

## Contato

LinkedIn: [Luis Antonio Colombelli](https://linkedin.com/in/luisantoniocolombelli)
