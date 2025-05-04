const Tenant = require('../models/Tenant');

// List tenants with search
exports.getTenants = async (req, res) => {
  try {
    // You can add search/filter logic here if needed
    const tenants = await Tenant.find();
    res.json(tenants);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create tenant
exports.createTenant = async (req, res) => {
  try {
    const tenant = await Tenant.create(req.body);
    res.status(201).json(tenant);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get tenant by ID
exports.getTenant = async (req, res) => {
  try {
    const tenant = await Tenant.findById(req.params.id);
    if (!tenant) return res.status(404).json({ message: 'Tenant not found' });
    res.json(tenant);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update tenant by ID
exports.updateTenant = async (req, res) => {
  try {
    const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tenant) return res.status(404).json({ message: 'Tenant not found' });
    res.json(tenant);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete tenant by ID
exports.deleteTenant = async (req, res) => {
  try {
    const tenant = await Tenant.findByIdAndDelete(req.params.id);
    if (!tenant) return res.status(404).json({ message: 'Tenant not found' });
    res.json({ message: 'Tenant deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Upgrade/downgrade plan (stub)
exports.updateTenantPlan = (req, res) => {
  res.status(501).json({ message: 'Update tenant plan not implemented yet' });
};

// Deactivate tenant (stub)
exports.deactivateTenant = (req, res) => {
  res.status(501).json({ message: 'Deactivate tenant not implemented yet' });
};

// Reactivate tenant (stub)
exports.reactivateTenant = (req, res) => {
  res.status(501).json({ message: 'Reactivate tenant not implemented yet' });
};
