const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.use(auth);

router.get('/', role(['admin']), sessionController.getAllSessions);

module.exports = router;