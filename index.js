const Usuario = require('./model/Usuario');

async function criarUsuario(usuario){
  await Usuario.create(usuario);
  console.log("Usuario criado");
}

// criarUsuario({
//   nome: "João",
//   email: "joao@gmail.com",
//   nascimento: "2000-01-01"
// });

async function listarUsuarios(){
  const usuarios = await Usuario.findAll();
  console.log(JSON.stringify(usuarios)); 
}

listarUsuarios();

async function buscarUsuario(email){
  const usuario = await Usuario.findByPk(email);
  console.log(JSON.stringify(usuario));
}

// buscarUsuario("maria@gmail.com");

async function atualizarUsuario(email, nome){
  const usuario = await Usuario.findByPk(email);
  usuario.nome = nome;
  await usuario.save();
  console.log("Usuario atualizado");
}

// atualizarUsuario("joao@gmail.com", "João da Silva");]

async function deletarUsuario(email){
  const usuario = await Usuario.findByPk(email);
  await usuario.destroy();
  console.log("Usuario deletado");
}

// deletarUsuario("paulo@gmail.com");