# Projeto Avaliativo FullStack - Car Rent

Este projeto é uma aplicação web fullstack desenvolvida com **Spring Boot** no backend e **Angular** no frontend. A aplicação é um CRM que gerencia aluguel de veículos.

## Alunos

- [Alex Cesar](https://github.com/thealexcesar)
- [Baruc BM](https://github.com/BarucBM)

## Funcionalidades

### Backend
- **API RESTful** com operações de CRUD para `Clientes`, `Veículos` e `Aluguéis`.
- **Paginação** e **filtros** implementados para todas as entidades.
- Persistência de dados utilizando **PostgreSQL**.

### Frontend
- **Interface de usuário** simples para gerenciar `Clientes`, `Veículos` e `Aluguéis`.
- **Validações de entrada** e mensagens de erro/sucesso.

## Como Rodar a Aplicação

### Backend
1. Clone o repositório:
   `git clone https://github.com/BarucBM/Projeto_Avaliativo_FullStack.git`
2. Entre no diretório do projeto:
   `cd Projeto_Avaliativo_FullStack/backend`
3. Configure o banco de dados PostgreSQL no `application.properties`.
4. Rode o projeto:
   `mvn spring-boot:run`

### Frontend
1. Entre no diretório do frontend:
   `cd Projeto_Avaliativo_FullStack/frontend`
2. Instale as dependências:
   `npm install`
3. Inicie o servidor Angular:
   `ng serve`
