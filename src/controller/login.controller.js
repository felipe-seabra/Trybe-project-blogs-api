const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.validateLogin(email, password);

  if (type) return res.status(400).json({ message });

  res.status(200).json({ token: message });
};

module.exports = {
  login,
};