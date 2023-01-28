const express = require('express');
const { categoryController } = require('../controller');
const middlewares = require('../middlewares');

const category = express.Router();

category.post(
  '/',
  middlewares.categoryMiddleware.validateNewCategory,
  middlewares.authMiddleware.authToken,
  categoryController.createNewCategory,
);
category.get('/', middlewares.authMiddleware.authToken, categoryController.listCategories);

module.exports = category;