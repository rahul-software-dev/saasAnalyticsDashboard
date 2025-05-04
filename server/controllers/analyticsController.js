const Analytics = require('../models/Analytics');

// Get dashboard stats (optionally by time range)
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

// Track event (user activity, feature usage, etc.)
exports.trackEvent = async (req, res) => {
  try {
    const event = await Analytics.create({ ...req.body, tenant: req.user.tenant });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Export analytics data (CSV/JSON) - stub
exports.exportAnalytics = (req, res) => {
  res.status(501).json({ message: 'Export analytics not implemented yet' });
};
