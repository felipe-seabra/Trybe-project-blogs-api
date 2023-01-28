const { Category } = require('../models');

const createNewCategory = async (name) => {
  await Category.create(name);

  const category = await Category.findOne({ where: name });

  return { type: null, message: category };
};

const findAllCategories = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

module.exports = {
  createNewCategory,
  findAllCategories,
};