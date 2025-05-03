// server/controllers/settingsController.js
const Settings = require('../models/Settings');

exports.getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne({ tenant: req.user.tenant });
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

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
