const express = require('express');
const router = express();

// API Routes
router.use('/', require('./apiRoutes'));

module.exports = router;