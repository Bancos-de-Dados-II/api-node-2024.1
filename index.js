const express = require('express')
const app = express()
app.use(express.json());
require('dotenv').config();
const port = process.env.API_PORT;

const usuarioRouter = require('./routers/UsuarioRouter');
const ocorrenciaRouter = require('./routers/OcorrenciaRouter');

app.use('/usuarios', usuarioRouter);
app.use('/ocorrencias', ocorrenciaRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});