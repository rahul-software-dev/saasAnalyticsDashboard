const Settings = require('../models/Settings');

// Get settings for current tenant
exports.getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne({ tenant: req.user.tenant });
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update settings for current tenant
exports.updateSettings = async (req, res) => {
  try {
    const settings = await Settings.findOneAndUpdate(
      { tenant: req.user.tenant },
      req.body,
      { new: true, upsert: true }
    );
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Export settings (stub)
exports.exportSettings = (req, res) => {
  res.status(501).json({ message: 'Export settings not implemented yet' });
};

// Import settings (stub)
exports.importSettings = (req, res) => {
  res.status(501).json({ message: 'Import settings not implemented yet' });
};
