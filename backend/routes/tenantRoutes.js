const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.use(auth);

router.get('/', role(['admin']), tenantController.getAllTenants);
router.post('/', role(['admin']), tenantController.createTenant);
router.put('/:id', role(['admin']), tenantController.updateTenant);

module.exports = router;