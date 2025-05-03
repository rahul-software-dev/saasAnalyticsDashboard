// server/controllers/analyticsController.js
const Analytics = require('../models/Analytics');

exports.getDashboardStats = async (req, res) => {
  try {
    // Example: Aggregate stats for current tenant
    const stats = await Analytics.aggregate([
      { $match: { tenant: req.user.tenant } },
      // ... more aggregation stages as needed
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.trackEvent = async (req, res) => {
  try {
    const event = await Analytics.create({ ...req.body, tenant: req.user.tenant });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
