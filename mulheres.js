const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Andreza',
        imagem: 'https://github.com/AndrezaOliveira01',
        minibio: 'Linda'
    },
    {
        nome: 'Simara',
        imagem: 'https://github.com/AndrezaOliveira01',
        minibio: 'Prof'
    },
    {
        nome: 'Iana',
        imagem: 'https://github.com/AndrezaOliveira01',
        minibio: 'CEO'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)