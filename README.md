# 🍔 FastOrder API — Sistema de Pedidos com Backend em Node.js

**FastOrder API** é uma aplicação backend para gerenciamento de pedidos em um sistema de restaurante, construída em **Node.js com Express**, organizada de forma modular e com foco em rotas RESTful claras e escaláveis.
---

![Node.js](https://img.shields.io/badge/Node.js-%23339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-%23000000.svg?style=flat&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-secure-yellow)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=flat&logo=postgresql&logoColor=white)
![API REST](https://img.shields.io/badge/API-RESTful-blue)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-lightblue)
![Versão](https://img.shields.io/badge/versão-1.0.0-yellow)
![Testado no Insomnia](https://img.shields.io/badge/Testado%20em-Insomnia-purple)
![Documentação](https://img.shields.io/badge/docs-prontas-green)
![by Luana](https://img.shields.io/badge/feito%20por-Luana%20Cristina%20da%20Silva-critical)
![colaboração ativa](https://img.shields.io/badge/contribuição-Backend%20completo-blueviolet)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)


---

> 🔁 Este repositório é um **fork** do projeto original mantido por [@DevSolto](https://github.com/DevSolto).  
> 🎯 Nesta versão, **todo o backend foi desenvolvido por [@Luanacsilva](https://github.com/Luanacsilva)**, incluindo estrutura de pastas, rotas, controllers, integração com banco de dados e lógica de negócio.


## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- JWT (autenticação)
- Banco de dados relacional (ex: PostgreSQL ou SQLite)
- Insomnia / Postman para testes
- Middleware de validação e segurança

---

## 🔐 Funcionalidades

- 📥 Cadastro e login de usuários
- 🔐 Proteção de rotas com JWT
- 🍔 Registro de pedidos
- 📦 Controle de status dos pedidos (criado, em preparo, finalizado)
- 👩‍🍳 Painel de pedidos para cozinha
- 🔄 Atualização e cancelamento de pedidos

---

## 📁 Estrutura do Projeto

```bash

FastOrder-API/
├── src/ │
├── controllers/ # Lógica de negócio │
├── routes/ # Endpoints da API │
├── middlewares/ # Autenticação, erros, validações │
├── models/ # Modelagem dos dados (se for usado ORM) │
 └── services/ # Regras de negócio (opcional)
├── .env.example # Variáveis de ambiente
├── package.json
 └── README.md
```

---


---

## ▶️ Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/Luanacsilva/FastOrder-API
cd FastOrder-API
```
2. Instale as dependências:
```bash
npm install
```
3. Configure o arquivo .env com suas variáveis

4. Inicie o servidor:
```bash
npm run dev
```

---

## 👩‍💻 Desenvolvido por

 Luana Cristina da Silva

---

## ⚖️ Licença

Este projeto segue a licença MIT








