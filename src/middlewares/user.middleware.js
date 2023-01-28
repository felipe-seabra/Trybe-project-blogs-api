const { newUserSchema } = require('./schema');

const validateNewUser = async (req, res, next) => {
  try {
    const { body } = req;
    await newUserSchema.validateAsync(body);
    next();
  } catch (err) {
    console.log(err);
    if (err.isJoi === true) return res.status(400).send({ message: err.message });
    return res.status(409).send({ message: err.message });
  }
};

module.exports = {
  validateNewUser,
};