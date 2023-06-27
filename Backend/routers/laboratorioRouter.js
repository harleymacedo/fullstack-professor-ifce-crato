//Imports gerais
const laboratorioRouter = require('express').Router();
const mongoose = require('mongoose')
const laboratorio = require('../models/laboratorioModel')

//Rota para obter todos os laboratórios
laboratorioRouter.get('/laboratorio/todos', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const laboratoriosBuscados = await laboratorio.find()
        res.json({laboratorios: laboratoriosBuscados})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

//Rota para obter um laboratório pelo id
laboratorioRouter.get('/laboratorio/porId/:id', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const laboratorioBuscado = await laboratorio.findById(req.params.id)
        res.json({laboratorio: laboratorioBuscado})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

//Rota para obter laboratórios por nome
laboratorioRouter.get('/laboratorio/porNome/:nome', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const filtro = req.params.nome
        const laboratoriosBuscados = await laboratorio.find({"nome": {$regex: filtro}})
        res.json({laboratorios: laboratoriosBuscados})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

module.exports = laboratorioRouter