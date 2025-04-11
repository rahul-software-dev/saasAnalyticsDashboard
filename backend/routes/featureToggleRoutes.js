const express = require('express');
const router = express.Router();
const featureToggleController = require('../controllers/featureToggleController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.use(auth);

router.get('/', featureToggleController.getToggles);
router.post('/', role(['admin']), featureToggleController.setToggle);

module.exports = router;