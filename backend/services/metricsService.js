const Metric = require('../models/Metric');

const recordMetric = async (data) => new Metric(data).save();

const getMetricsByUser = async (userId) => Metric.find({ userId }).sort({ timestamp: -1 });

module.exports = {
  recordMetric,
  getMetricsByUser,
};