const knex = require('knex');

// Replace the configuration options with your actual database settings
const db = knex({
  client: 'pg', // PostgreSQL database
  connection: {
    host: 'your_database_host',
    user: 'your_database_username',
    password: 'your_database_password',
    database: 'your_database_name',
  },
});

// Export the db object to be used in other files
module.exports = db;