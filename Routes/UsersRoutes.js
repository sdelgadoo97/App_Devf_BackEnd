const express = require('express');
const { createUser } = require('../Controllers/UsersController');
const { validateRole, validateToken, encryptPassword } = require('../Middlewares/AuthMiddleware');

const userRoutes = express.Router();

userRoutes.post('/users', encryptPassword, createUser);

module.exports = userRoutes;
