const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const requireAuth = require('../middlewares/requireAuth');
const requireRole = require('../middlewares/requireRole');

// All tenant routes require authentication and admin role
router.use(requireAuth, requireRole(['admin']));

// List tenants with search
router.get('/', tenantController.getTenants);

// Create tenant
router.post('/', tenantController.createTenant);

// Get/update/delete tenant by ID
router.get('/:id', tenantController.getTenant);
router.put('/:id', tenantController.updateTenant);
router.delete('/:id', tenantController.deleteTenant);

// Upgrade/downgrade plan
router.patch('/:id/plan', tenantController.updateTenantPlan);

// Deactivate/reactivate tenant
router.patch('/:id/deactivate', tenantController.deactivateTenant);
router.patch('/:id/reactivate', tenantController.reactivateTenant);

module.exports = router;
