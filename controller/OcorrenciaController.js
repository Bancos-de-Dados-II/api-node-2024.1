const Ocorrencia = require('../model/Ocorrencia');
const client = require('../database/redis');

const listarOcorrencias = async (req, res) => {

  const cache = await client.get('ocorrencias');

  if(cache){
    console.log('Cache hit');
    res.json(JSON.parse(cache));
  }else{
    console.log('Cache miss');
    const ocorrencias = await Ocorrencia.findAll();

    await client.set('ocorrencias', JSON.stringify(ocorrencias),{
      EX: 3600
    });

    res.json(ocorrencias);
  }
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