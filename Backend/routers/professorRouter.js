const professorRouter = require('express').Router()
const mongoose = require('mongoose')
const professor = require('../models/professorModel')

//Obter todos os professores
professorRouter.get('/professor/todos', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const professoresBuscados = professor.find()
        res.json({professores: professoresBuscados})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

//Obter professor por ID
professorRouter.get('/professor/porId/:id', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const professorBuscado = await professor.findById(req.params.id)
        res.json({professor: professorBuscado})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

//Obter professor por Nome
professorRouter.get('/professor/porNome/:nome', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const filtro = req.params.nome
        const professoresBuscados = await professor.find({nome: {$regex: filtro}})
        res.json({professores: professoresBuscados})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

module.exports = professorRouter