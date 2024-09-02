const Ocorrencia = require('../model/Ocorrencia');
const client = require('../database/redis');

const listarOcorrencias = async (req, res) => {

  const cache = await client.get('ocorrencias');

  if(cache){
    console.log('Cache hit');
    res.json(JSON.parse(cache));
  }else{
    console.log('Cache miss');
    const ocorrencias = await Ocorrencia.find();

    await client.set('ocorrencias', JSON.stringify(ocorrencias),{
      EX: 3600
    });

    res.json(ocorrencias);
  }
}

const criarOcorrencia = async (req, res) => {
  Ocorrencia.create(req.body)
    .then(result =>{
      res.status(201).send(result)
    })
    .catch(err =>{
      res.status(400).send(err);
    });
}

module.exports = { listarOcorrencias, criarOcorrencia};