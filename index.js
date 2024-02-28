const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

const {listarUsuarios} = require('./controller/UsuarioController');

app.get('/usuarios', listarUsuarios);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});