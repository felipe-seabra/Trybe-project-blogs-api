const { userService } = require('../services');
const errorMap = require('../utils/errorMap');

const listUsers = async (_req, res) => {
  const { type, message } = await userService.findAllUsers();
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const listUserById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await userService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const createNewUser = async (req, res) => {
  const { body } = req;

  const { type, message } = await userService.createNewUser(body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json({ token: message });
};

const deleteMe = async (req, res) => {
  const { id } = req.user;

  const { type, message } = await userService.deleteMe(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json();
};

module.exports = {
  listUsers,
  listUserById,
  createNewUser,
  deleteMe,
};