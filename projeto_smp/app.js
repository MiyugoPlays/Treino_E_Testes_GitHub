const express = require('express'); //importa o framework express

//rotas: (endereço do servidor 'seria tipo localhost:3000/cadastro')
const router = express.Router();
router.get('/',(req, res)=>{
    res.send('お早う 世界 2024');
});

//configurações basicas do app
const app = express();
app.use('/', router);

module.exports = app; //exportando o app, pois iremos importa-lo