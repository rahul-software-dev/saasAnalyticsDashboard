const Metric = require('../models/Metric');
const Event = require('../models/Event');

const getOverview = async (tenantId) => {
  const userCount = await Metric.distinct('userId', { tenantId }).countDocuments();
  const eventCount = await Event.countDocuments({ tenantId });
  return { userCount, eventCount };
};

const getEngagementStats = async (tenantId) => {
  const events = await Event.aggregate([
    { $match: { tenantId } },
    { $group: { _id: '$eventType', count: { $sum: 1 } } },
  ]);
  return events;
};

module.exports = {
  getOverview,
  getEngagementStats,
};