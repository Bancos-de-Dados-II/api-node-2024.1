const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('api', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

conectar = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

conectar();

const Usuario = sequelize.define('Usuario', {
  // Model attributes are defined here
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  nascimento:{
    type: DataTypes.DATE
  }
}, {
  // Other model options go here
});

async function sincronizar(){
  await Usuario.sync();
  console.log("Sincronizado");
}

// sincronizar();

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

// listarUsuarios();

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

deletarUsuario("paulo@gmail.com");