const express = require('express');
const { loginController } = require('../controller');

const login = express.Router();

login.post('/', loginController.login);

module.exports = login;