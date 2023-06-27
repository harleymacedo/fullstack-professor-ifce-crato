const mongoose = require('mongoose')

const professorModel = mongoose.Schema({
    nome: String,
    email: String,
    area: String
})

module.exports = mongoose.model('Professor', professorModel)