const express = require('express');
const { LoginController } = require('../controller');

const login = express.Router();

login.post('/', LoginController.login);

module.exports = login;