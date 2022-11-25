const soma = (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = Number(num1) + Number(num2);
    res.json({ resultado, num1, num2 })
}

const subtracao = (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) - Number(num2);
    res.send(` O resultado da subtração é ${resultado}`);
}

const multiplicacao = (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) * Number(num2);
    res.send(` O resultado da multiplicação é ${resultado}`);
}

const divisao = (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) / Number(num2);
    res.send(` O resultado da divisão é ${resultado}`);
}

module.exports = { soma, subtracao, multiplicacao, divisao };