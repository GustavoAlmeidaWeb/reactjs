const express = require('express');
const router = express();

// User Routes
router.use('/api/users', require('./UserRoutes'));

router.get('/', (req, res) => {
    res.send('API Working');
})

module.exports = router;