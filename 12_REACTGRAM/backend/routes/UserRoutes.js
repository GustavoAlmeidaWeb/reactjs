const express = require('express');
const router = express.Router();

// Controller
const { register, login, getCurrentUser } = require('../controllers/UserController.js');

// Middlewares
const validate = require('../middlewares/handleValidation.js');
const { userCreateValidation, loginValidation } = require('../middlewares/userValidations.js');
const authGuard = require('../middlewares/authGuard.js');

// Routes
router.post('/register', userCreateValidation(), validate, register);
router.post('/login', loginValidation(), validate, login);
router.get('/profile', authGuard, getCurrentUser);

module.exports = router;