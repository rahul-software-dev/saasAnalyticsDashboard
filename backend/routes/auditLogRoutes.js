const express = require('express');
const router = express.Router();
const auditLogController = require('../controllers/auditLogController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.use(auth);
router.get('/', role(['admin']), auditLogController.getAuditLogs);

module.exports = router;