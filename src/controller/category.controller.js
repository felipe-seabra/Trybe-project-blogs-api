const { categoryService } = require('../services');
const errorMap = require('../utils/errorMap');

const createNewCategory = async (req, res) => {
  const { body } = req;

  const { type, message } = await categoryService.createNewCategory(body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const listCategories = async (req, res) => {
  const { type, message } = await categoryService.findAllCategories();
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  createNewCategory,
  listCategories,
};