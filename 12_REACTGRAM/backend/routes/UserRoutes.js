const express = require('express');
const router = express.Router();

// Controller
const { register } = require('../controllers/UserController.js');

// Middlewares
const validate = require('../middlewares/handleValidation.js');
const { userCreateValidation } = require('../middlewares/userValidations.js');

// Routes
router.post('/register', userCreateValidation(), validate, register);

module.exports = router;