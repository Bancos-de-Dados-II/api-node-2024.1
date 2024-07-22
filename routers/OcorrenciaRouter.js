const express = require('express');
const ocorrenciaRouter = express.Router();

const {listarOcorrencias, criarOcorrencia} = 
    require('../controller/OcorrenciaController');

ocorrenciaRouter.get('/', listarOcorrencias);
ocorrenciaRouter.post('/', criarOcorrencia);

module.exports = ocorrenciaRouter;