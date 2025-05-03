// server/models/Feature.js
const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  tenant:      { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  name:        { type: String, required: true },
  enabled:     { type: Boolean, default: false },
  description: { type: String }
});

module.exports = mongoose.model('Feature', featureSchema);
