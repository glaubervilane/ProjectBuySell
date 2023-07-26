// itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authController = require('../controllers/authController');

// Route to get all items (public access)
router.get('/items', itemController.getAllItems);

// Other item-related routes can be defined here

module.exports = router;