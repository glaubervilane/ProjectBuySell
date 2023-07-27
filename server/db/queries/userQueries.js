
const db = require('../db'); // Assuming you have a database connection set up in db.js

const getAllUsers = function () {
  return db.select('*').from('users');
};

const getUserById = function (userId) {
  return db.select('*').from('users').where('user_id', userId).first();
};

// Other user-related queries can be defined here

module.exports = {
  getAllUsers,
  getUserById,
  // Export other user-related queries here
};