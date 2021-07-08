'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Popula Perfils
    await queryInterface.bulkInsert('Perfils', [{
      descricao: 'Aluno',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'Professor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'Coordenação',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'Administrador',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    //Popula Usuarios
    await queryInterface.bulkInsert('Usuarios', [{
      nome: 'Renan Henrique Ramalho Barbosa',
      email: 'renanzanelati@gmail.com',
      perfilId: 1,
      fotoUrl: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
    await queryInterface.bulkDelete('Perfils', null, {});
  }
};
