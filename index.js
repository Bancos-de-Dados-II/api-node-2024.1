const { Sequelize } = require('sequelize');

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