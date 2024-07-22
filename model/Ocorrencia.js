const sequelize = require('../database/sequelize');
const {DataTypes} = require('sequelize');

const Ocorrencia = sequelize.define('Ocorrencia', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    localizacao:{
      type: DataTypes.GEOMETRY,
      allowNull: false
    }
  }, {
    // Other model options go here
  });
  
  async function sincronizar(){
    await Ocorrencia.sync();
    console.log("Sincronizado");
  }
  
sincronizar();

module.exports = Ocorrencia; 