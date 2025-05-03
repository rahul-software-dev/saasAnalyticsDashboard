const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  tenant:      { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true, unique: true },
  preferences: { type: Object, default: {} },
  updatedAt:   { type: Date, default: Date.now }
});

module.exports = mongoose.model('Settings', settingsSchema);