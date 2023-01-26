const express = require('express');
const LoginController = require('../controller/login.controller');

const login = express.Router();

login.post('/', LoginController.login);

module.exports = login;