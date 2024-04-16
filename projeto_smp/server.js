const app = require('./app');

require('dotenv').config({path:'variaveis.env'});

app.set('port',process.env.PORT || 7777); //escolher porta 
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando a porta: " + server.address().port);
});