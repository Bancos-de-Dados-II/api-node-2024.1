const Ocorrencia = require('../model/Ocorrencia');

const listarOcorrencias = async (req, res) => {
  const ocorrencias = await Ocorrencia.findAll();
  res.json(ocorrencias);
}

const criarOcorrencia = async (req, res) => {
  try{
    const ocorrencia = await Ocorrencia.create(req.body);
    res.status(201).json(ocorrencia);
    }catch (exeption){
        res.status(400).json({erro: exeption.message});
        return;
    }
}

module.exports = { listarOcorrencias, criarOcorrencia};