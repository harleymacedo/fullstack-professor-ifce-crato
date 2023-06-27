const professorRouter = require('express').Router();

professorRouter.get('/professor/todos', (req, res) => {
    try {
        res.json({professores: []})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

professorRouter.get('/professor/porId/:id', (req, res) => {
    try {
        res.json({professor: {}})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

professorRouter.get('/professor/porNome/:nome', (req, res) => {
    try {
        res.json({professores: []})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

module.exports = professorRouter