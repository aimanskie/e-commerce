const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('reserve-parking-db', 'admin', 'razimar123', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

module.exports = { sequelize };
