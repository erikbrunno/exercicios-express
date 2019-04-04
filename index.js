const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use('/saudacao', saudacao('Erik Brunno'))

app.use('/opa', (req, res, next) => {
    console.log('Antes')
    next()
})

app.use('/opa', (req, res) => {
    console.log('Durante')
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