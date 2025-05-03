const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const requireAuth = require('../middlewares/requireAuth');
const requireRole = require('../middlewares/requireRole');

// All user routes require authentication
router.use(requireAuth);

// List users with pagination, search, filtering
router.get('/', requireRole(['admin', 'manager']), userController.getUsers);

// Create user (admin only, e.g. for direct creation)
router.post('/', requireRole(['admin']), userController.createUser);

// Get/update/delete user by ID
router.get('/:id', userController.getUser);
router.put('/:id', requireRole(['admin', 'manager']), userController.updateUser);
router.delete('/:id', requireRole(['admin']), userController.deleteUser);

// Update user role (admin only)
router.patch('/:id/role', requireRole(['admin']), userController.updateUserRole);

// Deactivate/reactivate user (admin only)
router.patch('/:id/deactivate', requireRole(['admin']), userController.deactivateUser);
router.patch('/:id/reactivate', requireRole(['admin']), userController.reactivateUser);

// Get/update own profile
router.get('/me/profile', userController.getMyProfile);
router.put('/me/profile', userController.updateMyProfile);

module.exports = router;
