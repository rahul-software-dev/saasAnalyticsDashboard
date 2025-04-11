const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const auth = require('../middleware/authMiddleware');

router.use(auth);

router.post('/', feedbackController.submitFeedback);
router.get('/', feedbackController.getFeedback);

module.exports = router;