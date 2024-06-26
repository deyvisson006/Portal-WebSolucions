const express = require('express')
const app = express()
const port = 3000

const produtos = [
    {id: 1, nome: 'Produto A', preco: 10.0},
    {id: 2, nome: 'Produto B', preco: 20.0},
    {id: 3, nome: 'Produto C', preco: 30.0},
    {id: 4, nome: 'Produto D', preco: 40.0},
    {id: 5, nome: 'Produto E', preco: 50.0}
]

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/sobre', (req, res) =>{
    res.sendFile(__dirname + "/public/sobre.html")
})

app.get('/contato', (req, res) =>{
    res.sendFile(__dirname + "/public/contato.html")
})

app.get('/produtos', (req, res) =>{
    res.sendFile(__dirname + "/public/produtos.html")
})

app.get('/produtos/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const produto = produtos.find(p => p.id === id)

    if(produto){
        res.json(produto)
    }else{
        res.status(404).json({mensagem: 'Produto não encontrado'})
    }
})

app.get('/loja', (req, res) =>{
    res.redirect('https://shopee.com.br')
})


app.use((req, res) =>{
    res.status(404).sendFile(__dirname + "/public/erro.html")
})


app.listen(port, (erro) =>{
    if(erro){
        console.log("Não foi possivel iniciar o servidor")
    }else{
        console.log(`Servidor rodando em http://localhost:${port}`)
    }
})