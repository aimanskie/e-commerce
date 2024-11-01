const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Payment = sequelize.define(
  'Payment',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    param6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plateNo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    paymentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    txnPayload: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    txnResult: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    txnResult2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    txnStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passwordId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
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
    tableName: 'payment',
    freezeTableName: true,
  }
);

module.exports = Payment;
