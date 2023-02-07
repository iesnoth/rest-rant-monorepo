'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',[{
      first_name:'Victoria',
      last_name:'Bossman',
      email: 'admin@example.com',
      role:'admin',
      password_digest: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users',{
      email:'admin@example.com'
    })
  }
};
//C:\Users\iesno\Desktop\rest-rant-monorepo\backend\seeders\20230207020934-add-admin.js