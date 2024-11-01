const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Car = sequelize.define(
  'Car',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plateNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'vehicles',
    freezeTableName: true,
  }
);

module.exports = Car;
