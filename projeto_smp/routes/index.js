const express = require('express'); //importa o framework express

//rotas: (endereço do servidor 'seria tipo localhost:3000/cadastro')
const router = express.Router();
router.get('/',(req, res)=>{
    let nome = req.query.name;
    let idade = req.query.age;
    res.send('お早う 世界 2024'+ '<br>名前: ' + nome + '<br>' + idade + ' 歳'); //aqui usa o get(deve se colocar junto na url as info)
});

router.get('/mairo',(req, res)=>{
    res.sendFile( 'a.html', {root: './'}); //ele ta puxando um arquivo .html
});

router.get('/posts/:id',(req, res)=>{
    let id = req.params.id
    res.send('ID do post: ' + id); //usa metodo post (precisou mudar o app.js)
});

router.get('/json',(req, res)=>{
    let nome = req.query.nome
    let sobrenome = req.query.sobrenome
    res.json({
        nomeCompleto: nome + ' ' + sobrenome //aqui ele formata os textos em json (vetor de valores)
    })
});

router.get('/json2',(req, res)=>{
    res.json(req.query) //diferente do de cima, ele pega todos os textos e coloca no json
});

module.exports = router;