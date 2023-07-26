// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Route to get all users (authenticated access)
router.get('/users', authController.verifyAuthToken, userController.getAllUsers);

// Other user-related routes can be defined here

module.exports = router;