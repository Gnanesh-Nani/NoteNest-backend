const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the headers
  const token = req.header('x-auth-token');

  // Check if there's no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user ID from the token to the request
    req.userId = decoded.userId;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(400).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
