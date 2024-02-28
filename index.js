const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

const {listarUsuarios, buscarUsuario, criarUsuario} = require('./controller/UsuarioController');

app.get('/usuarios', listarUsuarios);
app.get('/usuarios/:email', buscarUsuario);
app.post('/usuarios', criarUsuario);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});