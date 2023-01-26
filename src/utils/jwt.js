const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'MySecretPassword';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  try {
    return jwt.sign(payload.dataValues, JWT_SECRET, jwtConfig);
  } catch (err) {
    throw new Error('Failed to generate token');
  }
};

const decodeToken = (token) => {
  if (!token) {
    throw new Error('Undefined Token');
  }

  try {
    const result = jwt.verify(token, JWT_SECRET);
    return result;
  } catch (err) {
    throw new Error('Invalid assignature');
  }
};

module.exports = {
  generateToken,
  decodeToken,
};