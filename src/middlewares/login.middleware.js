const schema = require('../validations/validationsInputValues');

const loginMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  const error = schema.validateLogin(email, password);
  if (error) {
    res.status(400).json('Some required fields are missing');
  }

  return next();
};

module.exports = loginMiddleware;