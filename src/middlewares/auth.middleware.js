const { decodeToken } = require('../utils/jwt');

const authToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) res.status(401).json({ message: 'Token not found' });
  try {
    const user = decodeToken(authorization);
    req.user = { ...user };
    return next();
  } catch (err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { authToken };