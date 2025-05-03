const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const requireAuth = require('../middlewares/requireAuth');
const requireRole = require('../middlewares/requireRole');

// Registration & Login
router.post('/login', authController.login);
router.post('/register', authController.register);

// Password reset flow
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

// Invite user (admin/manager only)
router.post('/invite', requireAuth, requireRole(['admin', 'manager']), authController.inviteUser);

module.exports = router;
