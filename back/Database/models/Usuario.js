'use strict'

module.exports = (sequelize, DataTypes) =>{
    const Usuario = sequelize.define('Usuarios', {
        nome: DataTypes.STRING
    },{})
    return Usuario;
}