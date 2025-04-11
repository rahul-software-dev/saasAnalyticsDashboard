const FeatureToggle = require('../models/FeatureToggle');

const getToggles = async (tenantId) => FeatureToggle.find({ tenantId });

const setToggle = async (tenantId, featureKey, enabled) => {
  return FeatureToggle.findOneAndUpdate(
    { tenantId, featureKey },
    { enabled },
    { upsert: true, new: true }
  );
};

module.exports = {
  getToggles,
  setToggle,
};