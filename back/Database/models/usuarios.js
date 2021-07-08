'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      this.belongsTo(models.Perfils, {
        foreignKey: 'perfilId',
        as: 'perfil'
      })
    }
  };
  Usuarios.init({
    nome: DataTypes.STRING,
    fotoUrl: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};