const express = require('express');

const app = express();


const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];//banco de dados
let indice = -1;

app.get('/', (req, res) => {
    indice = (indice + 1) % jogadores.length;

    res.send(`É a vez de ${jogadores[indice]} jogar!`)
});

app.get('/remover', (req, res) => {
    const { indice } = req.query;
    let JogadorRemovido = jogadores[indice]
    if (!JogadorRemovido)
        return res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);

    jogadores.splice(indice, 1)
    res.send(`[${jogadores.join(", ")}]`);
});

app.get('/adcionar', (req, res) => {
    const { nome, indice } = req.query;
    const primeiraLetra = nome[0].toUpperCase()
    const Nome = primeiraLetra + nome.substring(1).toLowerCase();

    if (indice > jogadores.length || indice < 0) {
        return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
    }

    if (!indice) {
        jogadores.push(Nome);
        return res.send(`[${jogadores.join(", ")}]`);
    }



    jogadores.splice(indice, 0, Nome)

    res.send(`[${jogadores.join(", ")}]`);

})


app.listen(8000);