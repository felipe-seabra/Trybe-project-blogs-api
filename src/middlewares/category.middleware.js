const { newCategorySchema } = require('./schema');

const validateNewCategory = async (req, res, next) => {
  try {
    const { body } = req;
    await newCategorySchema.validateAsync(body);
    next();
  } catch (err) {
    if (err.isJoi === true) return res.status(400).send({ message: err.message });
  }
};

module.exports = {
  validateNewCategory,
};