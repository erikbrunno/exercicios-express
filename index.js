const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')



app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/saudacao', saudacao('Erik Brunno'))

app.use('/opa', (req, res, next) => {
    console.log('Antes')
    next()
})

app.use('/opa', (req, res) => {
    console.log('Durante')
})

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    res.send(req.body)
})

app.get('/cliente/:id', (req, res) => {

    res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/segundo', (req, res) => {
    
    res.json([
        {id: 7, name: 'Ana Maria', position: 1},
        {id: 34, name: 'Joao', position: 21}
    ])
})

app.get('/primeiro', (req, res) => {
    
    res.json({
        name: 'Notebook',
        price: 2000.00,
        discount: 0.12
    }) 
    //res.send("Estou <strong>bem</strong>")
})

app.listen(3000, ()=> {
    console.log('Backend Executando ...')
})