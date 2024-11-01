const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const ParkingUser = sequelize.define(
  'ParkingUser',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNo: {
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
    passwordId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
    },
    isGuest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'users',
    freezeTableName: true,
  }
);

module.exports = ParkingUser;
