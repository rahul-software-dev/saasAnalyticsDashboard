const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const auth = require('../middleware/authMiddleware');

router.use(auth);

router.post('/', eventController.trackEvent);
router.get('/', eventController.getUserEvents);

module.exports = router;