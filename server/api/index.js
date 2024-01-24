const express = require('express')
const router = express.Router()

// GET /api/health
router.get('/health', (req, res, next) => {
    res.send('OK');
});

// ROUTER /api/locations
router.use('/locations', require('./locations'))

// ROUTER /api/resorts
router.use('/resorts', require('./resorts'))

// ROUTER /api/maps
router.use('/maps', require('./maps'))

// ROUTER /api/comments
router.use('/comments', require('./comments'))

module.exports = router;