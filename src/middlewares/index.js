const loginMiddleware = require('./auth.middleware');
const userMiddleware = require('./user.middleware');
const authMiddleware = require('./auth.middleware');
const categoryMiddleware = require('./category.middleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  authMiddleware,
  categoryMiddleware,
};