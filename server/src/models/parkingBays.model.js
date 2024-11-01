const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const ParkingBays = sequelize.define(
  'ParkingBays',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    deviceId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    floor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bayNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    operatorId: {
      type: DataTypes.INTEGER,
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
    tableName: 'parking_bays',
    freezeTableName: true,
  }
);

module.exports = ParkingBays;
