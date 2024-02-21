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

sincronizar();

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