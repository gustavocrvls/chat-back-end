const express = require('express');
const routes = express.Router();

// Controllers
const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');

// User
routes.get('/users/',UserController.index);
routes.post('/users/login',UserController.login);
routes.post('/users/insert',UserController.insert);

// Messages
routes.get('/messages/', MessageController.indexAscending);
routes.post('/messages/insert', MessageController.insert);
routes.get('/messages/find', MessageController.findByUsername);

module.exports = routes;
