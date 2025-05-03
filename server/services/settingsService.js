// server/services/settingsService.js
const Settings = require('../models/Settings');

exports.getSettings = async (tenantId) => {
  let settings = await Settings.findOne({ tenant: tenantId });
  if (!settings) {
    settings = await Settings.create({ tenant: tenantId, preferences: {} });
  }
  return settings;
};

exports.updateSettings = async (tenantId, data) => {
  return Settings.findOneAndUpdate(
    { tenant: tenantId },
    { preferences: data.preferences, updatedAt: new Date() },
    { new: true, upsert: true }
  );
};

exports.exportSettings = async (tenantId) => {
  const settings = await Settings.findOne({ tenant: tenantId }).lean();
  return settings;
};

exports.importSettings = async (tenantId, preferences) => {
  return Settings.findOneAndUpdate(
    { tenant: tenantId },
    { preferences, updatedAt: new Date() },
    { new: true, upsert: true }
  );
};
