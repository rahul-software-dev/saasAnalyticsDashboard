const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.use(auth);

router.get('/', role(['admin']), userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', role(['admin']), userController.updateUser);
router.delete('/:id', role(['admin']), userController.deleteUser);

module.exports = router;