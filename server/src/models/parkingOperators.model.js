const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const ParkingOperators = sequelize.define(
  'ParkingOperators',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    buildingName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imageMeta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dtechId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    tableName: 'parking_operators',
    freezeTableName: true,
  }
);

module.exports = ParkingOperators;
