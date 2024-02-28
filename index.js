const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.get('/hello/:nome', (req, res) => {
  res.send(`Hello ${req.params.nome}!`)
})

app.post('/hello', (req, res) => {
   res.status(201).json(req.body.nome)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})