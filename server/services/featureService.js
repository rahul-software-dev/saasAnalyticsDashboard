// server/services/featureService.js
const Feature = require('../models/Feature');
const Analytics = require('../models/Analytics');

exports.getFeatures = async (tenantId) => {
  return Feature.find({ tenant: tenantId });
};

exports.createFeature = async (tenantId, data) => {
  return Feature.create({ ...data, tenant: tenantId });
};

exports.toggleFeature = async (tenantId, featureId, enabled) => {
  return Feature.findOneAndUpdate(
    { _id: featureId, tenant: tenantId },
    { enabled },
    { new: true }
  );
};

exports.getFeatureUsage = async (tenantId, featureName, { startDate, endDate }) => {
  const match = { tenant: tenantId, feature: featureName };
  if (startDate && endDate) {
    match.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
  }
  return Analytics.countDocuments(match);
};

exports.updateFeature = async (tenantId, featureId, data) => {
  return Feature.findOneAndUpdate(
    { _id: featureId, tenant: tenantId },
    data,
    { new: true }
  );
};

exports.deleteFeature = async (tenantId, featureId) => {
  return Feature.findOneAndDelete({ _id: featureId, tenant: tenantId });
};
