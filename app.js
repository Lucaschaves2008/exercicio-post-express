    var express = require('express');
    var app = express();

    // middleware: interpreta o corpo das requisições como JSON
    app.use(express.json());

    var port = 3001;

    // rota inicial, só para confirmar que o servidor está de pé
    app.get('/', function(req, res) {
    res.send('Oi, mundo :-)');
    });

    // --- funções matemáticas ---
    function soma(a, b) {
    return a + b;
    }
    function subtracao(a, b) {
    return a - b;
    }
    function multiplicacao(a, b) {
    return a * b;
    }
    function divisao(a, b) {
    return a / b;
    }

    // --- rotas POST ---
    app.post('/soma', function (req, res) {
    var body = req.body;
    var a = Number(body.a);
    var b = Number(body.b);
    var resultado = soma(a, b);
    res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
    });

    app.post('/subtracao', function (req, res) {
    var body = req.body;
    var a = Number(body.a);
    var b = Number(body.b);
    var resultado = subtracao(a, b);
    res.send(`O resultado da subtração de ${a} e ${b} é ${resultado}`);
    });

    app.post('/multiplicacao', function (req, res) {
    var body = req.body;
    var a = Number(body.a);
    var b = Number(body.b);
    var resultado = multiplicacao(a, b);
    res.send(`O resultado da multiplicação de ${a} e ${b} é ${resultado}`);
    });

    app.post('/divisao', function (req, res) {
    var body = req.body;
    var a = Number(body.a);
    var b = Number(body.b);

    if (b === 0) {
        return res.status(400).send('Não é possível dividir por zero');
    }

    var resultado = divisao(a, b);
    res.send(`O resultado da divisão de ${a} e ${b} é ${resultado}`);
    });

    app.listen(port, function() {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
    });