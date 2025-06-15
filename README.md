
# Sistema de Cadastro para Academia (Backend)

Este é um projeto backend desenvolvido em **JavaScript** com **Node.js** e **Express**, seguindo o padrão de arquitetura **MVC**. O sistema foi pensado para uma academia pequena, onde apenas duas pessoas (o dono e o professor) utilizarão o sistema. Os clientes da academia não terão acesso ao sistema.

---

## Estrutura do Projeto

O projeto está organizado dentro da pasta `src`, com separação por responsabilidades:

```
src/
├── controllers/         # Controladores que tratam as requisições
├── models/              # Modelos com dados em memória (sem banco de dados)
├── routes/              # Rotas da API
├── app.js               # Configuração principal do Express
└── server.js            # Inicialização do servidor
```

---

## Etapas de Desenvolvimento

O sistema será desenvolvido em três versões, de forma incremental:

1. **Versão 1** – Backend funcional com dados em memória (sem persistência e sem autenticação).
2. **Versão 2** – Integração com banco de dados para persistência (provavelmente MongoDB ou SQLite).
3. **Versão 3** – Implementação de autenticação passwordless e criação de uma interface (views).

---

## Tecnologias Utilizadas

- Node.js
- Express
- JavaScript (ES6+)
- Arquitetura MVC

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/luisantoniocolombelli/academia-backend.git
   cd academia-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node src/server.js
   ```

4. Acesse as rotas no navegador ou com ferramentas como o Postman:
   - `GET /registers`
   - `POST /registers`
   - `PUT /registers/:id`
   - `DELETE /registers/:id`

---

## 💡 Observações

- Esta primeira versão **não utiliza banco de dados** — os dados são armazenados em memória.
- Ainda **não há autenticação**. Essa funcionalidade será adicionada na terceira etapa.

---

## 📁 Status do Projeto

🟡 **Versão 1 em desenvolvimento**

---

## ✍️ Autor

**Luis Antonio Colombelli**  
Desenvolvedor Backend em formação com foco em JavaScript e Node.js.
