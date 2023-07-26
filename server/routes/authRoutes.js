// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to handle user login and generate a JWT
router.post('/login', (req, res) => {
  // Authenticate user here (e.g., check credentials against database)
  // If authentication is successful, generate a JWT and send it back to the user
  const user = { userId: 1 }; // Replace with actual user data from the database
  const token = authController.generateAuthToken(user);
  res.json({ token });
});

module.exports = router;