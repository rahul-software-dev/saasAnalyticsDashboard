// server/controllers/featureController.js
const Feature = require('../models/Feature');

exports.getFeatures = async (req, res) => {
  try {
    const features = await Feature.find({ tenant: req.user.tenant });
    res.json(features);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

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
