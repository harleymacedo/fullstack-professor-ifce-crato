const mongoose = require('mongoose')

const laboratorioModel = mongoose.Schema({
    nome: String,
    local: String,
    qtdMaquinas: Number,
    problemas: String,
    recursos: String,
    foto: String,
    profResponsavel: String,
})

module.exports = mongoose.model('Laboratorio', laboratorioModel)