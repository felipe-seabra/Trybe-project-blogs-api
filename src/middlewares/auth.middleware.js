const { decodeToken } = require('../utils/jwt');

const loginMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) res.status(401).json('Token not found');
  try {
    const user = decodeToken(authorization);
    req.user = { ...user };
    return next();
  } catch (err) {
    res.status(401).json('Invalid token');
  }
};

module.exports = loginMiddleware;