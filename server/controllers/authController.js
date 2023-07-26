const itemQueries = require('../db/queries/itemQueries');

const getAllItems = function(req, res) {
  itemQueries.getAllItems()
    .then(items => {
      res.json({ items });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// Other item-related functions can be defined here

module.exports = {
  getAllItems,
  // Export other item-related functions here
};
