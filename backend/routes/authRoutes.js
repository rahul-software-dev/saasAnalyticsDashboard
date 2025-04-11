const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateRequest = require('../middleware/validateRequest');
const authSchemas = require('../validators/authSchemas');

router.post('/register', validateRequest(authSchemas.register), authController.register);
router.post('/login', validateRequest(authSchemas.login), authController.login);
router.get('/me', authController.getCurrentUser);

module.exports = router;