const express = require('express');
const router = express.Router();
const featureController = require('../controllers/featureController');
const requireAuth = require('../middlewares/requireAuth');
const requireRole = require('../middlewares/requireRole');

// All feature routes require authentication
router.use(requireAuth);

// List all features for tenant
router.get('/', featureController.getFeatures);

// Create new feature (admin/manager only)
router.post('/', requireRole(['admin', 'manager']), featureController.createFeature);

// Toggle feature (admin/manager only)
router.patch('/:id/toggle', requireRole(['admin', 'manager']), featureController.toggleFeature);

// Get feature usage analytics
router.get('/:id/usage', featureController.getFeatureUsage);

// Update feature (admin/manager only)
router.put('/:id', requireRole(['admin', 'manager']), featureController.updateFeature);

// Delete feature (admin only)
router.delete('/:id', requireRole(['admin']), featureController.deleteFeature);

module.exports = router;
