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