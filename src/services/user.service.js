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

const findAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { type: null, message: users };
};

const findById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return { type: 'USER_NOT_FOUND', message: 'User does not exist' };

  return { type: null, message: user };
};

module.exports = {
  createNewUser,
  findAllUsers,
  findById,
};