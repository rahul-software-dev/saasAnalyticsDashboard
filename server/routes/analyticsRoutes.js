const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const requireAuth = require('../middlewares/requireAuth');

// All analytics routes require authentication
router.use(requireAuth);

// Get dashboard stats (optionally by time range)
router.get('/dashboard', analyticsController.getDashboardStats);

// Track event (user activity, feature usage, etc.)
router.post('/track', analyticsController.trackEvent);

// Export analytics data (CSV/JSON)
router.get('/export', analyticsController.exportAnalytics);

module.exports = router;
