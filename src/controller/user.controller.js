const { userService } = require('../services');
const errorMap = require('../utils/errorMap');

const createNewUser = async (req, res) => {
  const { body } = req;

  const { type, message } = await userService.createNewUser(body);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json({ token: message });
};

module.exports = {
  createNewUser,
};