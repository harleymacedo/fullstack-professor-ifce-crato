const laboratorioRouter = require('express').Router();

laboratorioRouter.get('/laboratio/todos', (req, res) => {
    try {
        res.json({laboratorios: []})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

laboratorioRouter.get('/laboratorio/porId/:id', (req, res) => {
    try {
        res.json({laboratorio: {}})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

laboratorioRouter.get('/laboratorio/porNome/:nome', (req, res) => {
    try {
        res.json({laboratorios: []})
    } catch (error) {
        res.json({message: 'Erro durante a consulta'})
    }
})

module.exports = laboratorioRouter