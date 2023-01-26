const LoginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await LoginService.validateLogin(email, password);

  if (type) return res.status(400).json({ message });

  res.status(200).json({ token: message });
};

module.exports = {
  login,
};