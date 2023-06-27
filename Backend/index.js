const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'Servidor respondendo'})
})

app.listen(process.env.PORT || 3000)