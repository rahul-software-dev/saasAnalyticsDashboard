const express = require('express');
const router = express.Router();
const metricController = require('../controllers/metricsController');
const auth = require('../middleware/authMiddleware');

router.use(auth);

router.post('/', metricController.recordMetric);
router.get('/', metricController.getMetricsByUser);

module.exports = router;