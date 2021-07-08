'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfils extends Model {
    static associate(models) {
    }
  };
  Perfils.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Perfils',
  });
  return Perfils;
};