// authController.js
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Replace with your own secret key

function generateAuthToken(user) {
  const token = jwt.sign({ userId: user.user_id }, secretKey, { expiresIn: '1h' });
  return token;
}

function verifyAuthToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Authorization token not provided.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid authorization token.' });
    }

    req.user_id = decoded.userId;
    next();
  });
}

module.exports = {
  generateAuthToken,
  verifyAuthToken,
};