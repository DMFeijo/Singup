# Cypress Testes Automatizados

Este repositório contém testes automatizados Cypress para a aplicação Notes Serverless. Os testes verificam o processo de registro (signup) em diferentes cenários e validam o comportamento esperado do aplicativo.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) instalado globalmente
- Acesso à aplicação Notes Serverless em execução (URL da aplicação)

## Configuração

Antes de executar os testes, é necessário configurar o ambiente:

1. Clone este repositório para o seu ambiente local.

2. Instale as dependências do projeto com o seguinte comando:

   ## npm instal

3. Certifique-se de que a aplicação Notes Serverless esteja em execução na URL apropriada.

   ## Executando os Testes

   Para executar os testes, use o seguinte comando:

   ## npm test

Isso iniciará o Cypress e abrirá uma janela do navegador com os testes em execução. Você pode escolher os testes individuais para executar a partir dessa janela.

## Cenários de Teste

Este projeto de teste inclui os seguintes cenários:

- Cadastro com sucesso
- Cadastro com senhas diferentes
- Cadastro com senha fraca
- Cadastro com e-mail inválido
- Cadastro com e-mail existente

Certifique-se de que a aplicação e o ambiente de teste estejam configurados de acordo com esses cenários.

