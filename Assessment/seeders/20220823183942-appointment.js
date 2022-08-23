'use strict';
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const appointments = [...Array(5)].map((_) =>({
      guest: falso.randFullName(),
      phone: falso.randPhoneNumber(),
      email: falso.randEmail(),
      pet: falso.randFirstName(),
      apptDate: falso.randSoonDate(),
      apptTime: falso.randNumber({min: 1, max:12}),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('appointments', appointments)
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('appointments')
  }
};
