const express = require('express')
const app = express()
const cors = require('cors');
app.use(express.json());
require('dotenv').config();
const port = process.env.API_PORT;

// const usuarioRouter = require('./routers/UsuarioRouter');
const ocorrenciaRouter = require('./routers/OcorrenciaRouter');

let corsOptions = {
  origin : ['http://localhost:5500'],
}

app.use(cors());
// app.use('/usuarios', usuarioRouter);
app.use('/ocorrencias', cors(corsOptions),  ocorrenciaRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});