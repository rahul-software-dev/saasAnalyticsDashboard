const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.use(auth);

router.get('/', role(['admin']), roleController.getAllRoles);
router.post('/', role(['admin']), roleController.createRole);
router.put('/:id', role(['admin']), roleController.updateRole);
router.delete('/:id', role(['admin']), roleController.deleteRole);

module.exports = router;