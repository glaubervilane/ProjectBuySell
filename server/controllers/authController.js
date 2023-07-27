const jwt = require('jsonwebtoken');

// Function to verify the authentication token
const verifyAuthToken = (req, res, next) => {
  // Get the token from the request header or query parameter or cookie
  const token = req.header('Authorization') || req.query.token || req.cookies.token;

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // If the token is valid, set the user object in the request and continue to the next middleware/route handler
    req.user = decoded;
    next();
  });
};

module.exports = {
  verifyAuthToken,
};