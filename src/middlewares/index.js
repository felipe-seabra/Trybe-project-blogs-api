const loginMiddleware = require('./auth.middleware');
const userMiddleware = require('./user.middleware');
const authMiddleware = require('./auth.middleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  authMiddleware,
};