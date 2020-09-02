const express = require('express');
const routes = express.Router();

// Controllers
const UserController = require('./controllers/UserController');

routes.get('/users',UserController.index);

module.exports = routes;
