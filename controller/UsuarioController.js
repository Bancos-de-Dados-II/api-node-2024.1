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

module.exports = { listarUsuarios, buscarUsuario };


// async function criarUsuario(usuario){
//   await Usuario.create(usuario);
//   console.log("Usuario criado");
// }

// // criarUsuario({
// //   nome: "João",
// //   email: "joao@gmail.com",
// //   nascimento: "2000-01-01"
// // });

// async function buscarUsuario(email){
//   const usuario = await Usuario.findByPk(email);
//   console.log(JSON.stringify(usuario));
// }

// // buscarUsuario("maria@gmail.com");

// async function atualizarUsuario(email, nome){
//   const usuario = await Usuario.findByPk(email);
//   usuario.nome = nome;
//   await usuario.save();
//   console.log("Usuario atualizado");
// }

// // atualizarUsuario("joao@gmail.com", "João da Silva");]

// async function deletarUsuario(email){
//   const usuario = await Usuario.findByPk(email);
//   await usuario.destroy();
//   console.log("Usuario deletado");
// }

// // deletarUsuario("paulo@gmail.com");