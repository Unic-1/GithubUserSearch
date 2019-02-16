const Sequelize = require('sequelize');
const sequelize = new Sequelize('githubsearch', '', '', {
  host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: '/home/satyam/Documents/workspace/GitHubSearch/githubsearch.db'
});

module.exports = sequelize;