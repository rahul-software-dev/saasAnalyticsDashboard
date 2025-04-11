const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const auth = require('../middleware/authMiddleware');

router.use(auth);

router.get('/overview', dashboardController.getOverview);
router.get('/engagement', dashboardController.getEngagementStats);

module.exports = router;