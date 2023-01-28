const { Category } = require('../models');

const createNewCategory = async (name) => {
  await Category.create(name);

  const category = await Category.findOne({ where: name });

  return { type: null, message: category };
};

module.exports = {
  createNewCategory,
};