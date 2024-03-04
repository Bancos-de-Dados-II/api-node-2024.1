const Usuario = require('../model/Usuario');

const listarUsuarios = async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
}

const buscarUsuario = async (req,res) =>{
  const usuario = await Usuario.findByPk(req.params.email);

    if(usuario === null){
        res.status(404).json({erro: "Usuário não encontrado"});
        return;
    }

  res.json(usuario);
}

const criarUsuario = async (req, res) => {
  try{
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
    }catch (exeption){
        res.status(400).json({erro: exeption.message});
        return;
    }
}

const deletarUsuario = async (req,res) => {
  const usuario = await Usuario.findByPk(req.params.email);

  if(usuario == null){
    res.status(404).json({erro: "Usuário não encontrado"});
    return;
  }

  await usuario.destroy();
  res.json(usuario);
}

const atualizarUsuario = async (req,res) => {
  const usuario = await Usuario.findByPk(req.params.email);

  if(usuario == null){
    res.status(404).json({erro: "Usuário não encontrado"});
    return;
  }

  usuario.nome = req.body.nome;
  usuario.email = req.body.email;
  usuario.nascimento = req.body.nascimento;
  await usuario.save();
  res.json(usuario);
}

module.exports = { listarUsuarios, buscarUsuario, criarUsuario, 
  deletarUsuario, atualizarUsuario };