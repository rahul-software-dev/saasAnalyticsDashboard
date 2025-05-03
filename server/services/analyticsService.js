// server/services/analyticsService.js
const Analytics = require('../models/Analytics');
const { Parser } = require('json2csv');

exports.getDashboardStats = async (tenantId, { startDate, endDate }) => {
  const match = { tenant: tenantId };
  if (startDate && endDate) {
    match.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
  }
  // Example: aggregate events by type
  const stats = await Analytics.aggregate([
    { $match: match },
    { $group: { _id: '$event', count: { $sum: 1 } } }
  ]);
  return stats;
};

exports.trackEvent = async (tenantId, userId, event, feature, meta) => {
  return Analytics.create({
    tenant: tenantId,
    user: userId,
    event,
    feature,
    meta,
    timestamp: new Date()
  });
};

exports.exportAnalytics = async (tenantId, format = 'csv') => {
  const events = await Analytics.find({ tenant: tenantId }).lean();
  if (format === 'csv') {
    const parser = new Parser();
    return parser.parse(events);
  }
  return events;
};
