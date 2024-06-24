const express = require('express');
const { createUser } = require('../controllers/UserController');
//const { validateRole, validateToken, encryptPassword } = require('../middlewares/AuthMiddleware');

const userRoutes = express.Router();

userRoutes.post('/users', encryptPassword, createUser);

module.exports = userRoutes;
