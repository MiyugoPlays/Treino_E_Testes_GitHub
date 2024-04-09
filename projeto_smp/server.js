const app = require('./app');

app.set('port', 7777); //escolher porta 
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando a porta: " + server.address().port);
});