const express = require('express');
const { userController } = require('../controller');
const middlewares = require('../middlewares');

const user = express.Router();

user.get('/', middlewares.authMiddleware.authToken, userController.listUsers);
user.post('/', middlewares.userMiddleware.validateNewUser, userController.createNewUser);

module.exports = user;