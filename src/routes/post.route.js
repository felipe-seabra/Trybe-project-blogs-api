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
post.get('/', middlewares.authMiddleware.authToken, postController.listPosts);
post.get('/search', middlewares.authMiddleware.authToken, postController.searchPostByQuery);
post.get('/:id', middlewares.authMiddleware.authToken, postController.listPostById);
post.put(
  '/:id',
  middlewares.authMiddleware.authToken,
  middlewares.postMiddleware.validateUpdatePost,
  postController.updatePostById,
);
post.delete('/:id', middlewares.authMiddleware.authToken, postController.deletePostById);

module.exports = post;