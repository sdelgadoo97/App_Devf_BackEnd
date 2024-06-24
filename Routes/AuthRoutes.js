const express = require('express');
const { login } = require('../Controllers/AuthController');

const userRoutes = express.Router();

userRoutes.post('/auth/login', login);

module.exports = userRoutes;
