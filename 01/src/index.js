const express = require('express');
const { soma, subtracao, multiplicacao, divisao } = require('./calculadora')
const app = express();
app.use(express.json());

app.get('/somar', soma);
app.get('/subtrair', subtracao);
app.get('/multiplicar', multiplicacao);
app.get('/dividir', divisao);

app.listen(3000);