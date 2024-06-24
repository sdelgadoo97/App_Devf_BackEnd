const express = require('express');
const { login } = require('../controllers/AuthController');

const userRoutes = express.Router();

userRoutes.post('/auth/login', login);

module.exports = userRoutes;
