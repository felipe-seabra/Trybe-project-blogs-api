const { User } = require('../models');
const jwt = require('../utils/jwt');

const createNewUser = async (user) => {
  const { email } = user;

  const existingUserWithEmail = await User.findOne({ where: { email } });
  if (existingUserWithEmail) {
    return {
      type: 'EMAIL_ALREADY_REGISTERED', message: 'User already registered',
    };
  }

  await User.create(user);

  const findUserRegistered = await User.findOne({
    attributes: ['id', 'display_name', 'email'],
    where: { email },
  });

  const token = jwt.generateToken(findUserRegistered);

  return { type: null, message: token };
};

module.exports = {
  createNewUser,
};