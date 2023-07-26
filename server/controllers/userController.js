const userQueries = require('../db/queries/userQueries');

const getAllUsers = function (req, res) {
  userQueries.getAllUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Other user-related functions can be defined here

module.exports = {
  getAllUsers,
  // Export other user-related functions here
};