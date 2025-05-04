const Feature = require('../models/Feature');

// List all features for tenant
exports.getFeatures = async (req, res) => {
  try {
    const features = await Feature.find({ tenant: req.user.tenant });
    res.json(features);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new feature (admin/manager only)
exports.createFeature = async (req, res) => {
  try {
    const feature = await Feature.create({ ...req.body, tenant: req.user.tenant });
    res.status(201).json(feature);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Toggle feature (admin/manager only)
exports.toggleFeature = async (req, res) => {
  try {
    const feature = await Feature.findOneAndUpdate(
      { _id: req.params.id, tenant: req.user.tenant },
      { enabled: req.body.enabled },
      { new: true }
    );
    if (!feature) return res.status(404).json({ message: 'Feature not found' });
    res.json(feature);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get feature usage analytics (stub)
exports.getFeatureUsage = (req, res) => {
  res.status(501).json({ message: 'Get feature usage not implemented yet' });
};

// Update feature (admin/manager only)
exports.updateFeature = async (req, res) => {
  try {
    const feature = await Feature.findOneAndUpdate(
      { _id: req.params.id, tenant: req.user.tenant },
      req.body,
      { new: true }
    );
    if (!feature) return res.status(404).json({ message: 'Feature not found' });
    res.json(feature);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete feature (admin only)
exports.deleteFeature = async (req, res) => {
  try {
    const feature = await Feature.findOneAndDelete({ _id: req.params.id, tenant: req.user.tenant });
    if (!feature) return res.status(404).json({ message: 'Feature not found' });
    res.json({ message: 'Feature deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
