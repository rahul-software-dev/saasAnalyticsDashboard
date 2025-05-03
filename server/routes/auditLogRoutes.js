const express = require('express');
const router = express.Router();
const auditLogController = require('../controllers/auditLogController');
const requireAuth = require('../middlewares/requireAuth');
const requireRole = require('../middlewares/requireRole');

// Only admins/managers can view audit logs
router.use(requireAuth, requireRole(['admin', 'manager']));

// List logs with filtering (by user, action, date)
router.get('/', auditLogController.getLogs);

// Export audit logs
router.get('/export', auditLogController.exportLogs);

module.exports = router;
