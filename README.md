# Sistema de Cadastro de Usuários
Um sistema simples de cadastro de usuários desenvolvido com JavaScript puro, que permite criar, visualizar, atualizar e deletar dados de usuários armazenados no localStorage, utilizando o padrão de projeto Factory para a criação de objetos de usuário.

## 📋 Descrição
Este sistema permite o cadastro e a gestão de usuários, armazenando informações essenciais, como:

. Nome

. Data de Nascimento

. Telefone

. Email

. Endereço

. Gênero

A interface foi construída com HTML5 e CSS3, e a lógica de negócios foi implementada em JavaScript puro. Os dados são armazenados no localStorage, garantindo a persistência dos dados entre as sessões do navegador.

## 🛠️ Funcionalidades
Cadastro de Usuários: Registra novos usuários com informações completas.

Listagem de Usuários: Mostra uma lista atualizada dos usuários cadastrados em uma tabela.

Atualização de Usuários: Permite a edição das informações de usuários existentes.

Deleção de Usuários: Facilita a remoção de usuários da lista.

Armazenamento Persistente: Utiliza localStorage para garantir que os dados sejam salvos entre as sessões do navegador.

## 🚀 Tecnologias Utilizadas
HTML5 e CSS3: Estrutura e estilo da aplicação.

JavaScript Puro: Manipulação do DOM, eventos e lógica de negócios.

localStorage: Armazenamento de dados persistente no navegador.

## 📖 Como Usar
Abra o projeto no navegador.

Preencha as informações no formulário de cadastro e clique em "Cadastrar". O usuário será adicionado à lista e salvo no localStorage.

Para editar um usuário, clique no lápis ao lado do nome do usuário na lista, faça as alterações e salve.

Para remover um usuário, clique na lixeira ao lado do nome do usuário na lista.

## 🗂️ Organização do Código
usuario.js: Define o padrão Factory para criar objetos de usuário.

storageService.js: Contém funções para operações de salvar, listar, atualizar e deletar usuários no localStorage.

script.js: Gerencia as operações do formulário, como captura de dados e exibição da lista de usuários.

style.css: Define o layout e a estilização da interface, proporcionando uma aparência limpa e responsiva.

## 🖥️ Estrutura do Projeto

/src
  /js
    usuario.js
    storageService.js
    script.js
  /styles
    style.css
.gitignore
index.html
README.md

## ✨ Interface do Sistema
A interface contém um formulário para cadastro e uma tabela que exibe os usuários cadastrados com opções de edição e exclusão. O layout é responsivo, proporcionando uma boa experiência em diferentes tamanhos de tela.

## ✍️ Autor
Aminah Makhoul - Desenvolvedora do sistema.