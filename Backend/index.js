const express = require('express')
const app = express()
const laboratorioRouter = require('./routers/laboratorioRouter')

app.use(express.json())
app.use(laboratorioRouter)

app.get('/', (req, res) => {
    res.json({message: 'Servidor respondendo'})
})

app.listen(process.env.PORT || 3000)