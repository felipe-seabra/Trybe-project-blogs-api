const express = require('express');
const { userController } = require('../controller');
const middlewares = require('../middlewares');

const user = express.Router();

user.post('/', middlewares.userMiddleware.validateNewUser, userController.createNewUser);

module.exports = user;