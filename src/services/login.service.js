const { User } = require('../models');
const jwt = require('../utils/jwt');

const validateLogin = async (email, password) => {
  if (!(email && password)) {
    return {
      type: 'MISSING_FIELDS',
      message: 'Some required fields are missing',
    };
  }
  const user = await User.findOne({
    attributes: ['display_name', 'email', 'image'],
    where: { email, password },
  });
  if (!user) return { type: 'INVALID_FIELDS', message: 'Invalid fields' };

  const token = jwt.generateToken(user);

  return { type: null, message: token };
};

module.exports = {
  validateLogin,
};