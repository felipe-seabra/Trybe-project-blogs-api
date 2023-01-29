const express = require('express');
const { postController } = require('../controller');
const middlewares = require('../middlewares');

const post = express.Router();

post.post(
  '/',
  middlewares.authMiddleware.authToken,
  middlewares.postMiddleware.validateNewPost,
  postController.createNewPost,
);

module.exports = post;