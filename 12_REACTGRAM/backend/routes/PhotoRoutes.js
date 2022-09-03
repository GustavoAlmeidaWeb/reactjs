const express = require('express');
const router = express.Router();

// Controller

// Middlewares
const { photoInsertValidation } = require('../middlewares/photoValidation');
const authGuard = require('../middlewares/authGuard.js');
const validate = require('../middlewares/handleValidation.js');

// Routes

module.exports = router;