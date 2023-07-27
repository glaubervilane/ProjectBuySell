
const db = require('../db'); // Assuming you have a database connection set up in db.js

const getAllUsers = function () {
  return db.select('*').from('users');
};

const getUserById = function (userId) {
  return db.select('*').from('users').where('user_id', userId).first();
};

const createUser = function (userData) {
  return db.insert(userData).into('users').returning('*');
};

// Other user-related model functions can be defined here

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  // Export other user-related model functions here
};
