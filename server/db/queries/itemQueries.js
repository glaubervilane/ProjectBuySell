
const db = require('../db');

const getAllItems = function () {
  return db.select('*').from('items');
};

const getItemById = function (itemId) {
  return db.select('*').from('items').where('item_id', itemId).first();
};

// Other item-related queries can be defined here

module.exports = {
  getAllItems,
  getItemById,
  // Export other item-related queries here
};