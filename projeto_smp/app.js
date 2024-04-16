const express = require('express'); //importa o framework express
const router = require('./routes/index');


//configurações basicas do app
const app = express();
app.use('/', router);

app.use(express.json());

module.exports = app; //exportando o app, pois iremos importa-lo