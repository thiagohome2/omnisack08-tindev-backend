//Microframework para gerenciar as rotas de comunicação
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();
//Conexão com o MogoDB
mongoose.connect('mongodb+srv://thiago:thiago@cluster0-yy6rt.mongodb.net/oministack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});
//permite que a aplicação seja acessada por qualquer endereço
server.use(cors());
//o Exxpresss reconhece o tipo de requisição autmaticamene em que aplicar antes das rotas
server.use(express.json()); 
//Chama as rotas criadas
server.use(routes);
//Define a porta de comunicação
server.listen(3333);