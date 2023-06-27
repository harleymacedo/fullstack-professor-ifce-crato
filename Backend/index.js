//Imports gerais
const express = require('express')
const app = express()
const laboratorioRouter = require('./routers/laboratorioRouter')
const professorRouter = require('./routers/professorRouter')
const dotenv = require('dotenv').config()

//Adição de middlewares
app.use(express.json())
app.use(laboratorioRouter)
app.use(professorRouter)

//Rota raiz, que pode ser usada para página HTML com documentação da API
app.get('/', (req, res) => {
    res.json({message: 'Servidor respondendo'})
})

//Ouvinte de requisições
app.listen(process.env.PORT || 3000)