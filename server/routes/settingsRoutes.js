const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const requireAuth = require('../middlewares/requireAuth');

// All settings routes require authentication
router.use(requireAuth);

// Get/update settings
router.get('/', settingsController.getSettings);
router.put('/', settingsController.updateSettings);

// Export/import settings (admin only)
const requireRole = require('../middlewares/requireRole');
router.get('/export', requireRole(['admin']), settingsController.exportSettings);
router.post('/import', requireRole(['admin']), settingsController.importSettings);

module.exports = router;
