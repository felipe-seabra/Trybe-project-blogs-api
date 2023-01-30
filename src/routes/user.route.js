const express = require('express');
const { userController } = require('../controller');
const middlewares = require('../middlewares');

const user = express.Router();

user.get('/', middlewares.authMiddleware.authToken, userController.listUsers);
user.get('/:id', middlewares.authMiddleware.authToken, userController.listUserById);
user.post('/', middlewares.userMiddleware.validateNewUser, userController.createNewUser);
user.delete('/me', middlewares.authMiddleware.authToken, userController.deleteMe);

module.exports = user;