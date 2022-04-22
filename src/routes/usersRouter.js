const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

/*Renderiza vista login */
router.get('/login', usersController.login);
/* Renderiza vista registro */
router.get('/register', usersController.registro);


module.exports = router;