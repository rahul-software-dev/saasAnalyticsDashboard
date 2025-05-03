// server/models/Analytics.js
const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  tenant:      { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  event:       { type: String, required: true }, // e.g., 'login', 'feature_used'
  feature:     { type: String },
  meta:        { type: Object },                 // Additional event data
  timestamp:   { type: Date, default: Date.now }
});

module.exports = mongoose.model('Analytics', analyticsSchema);
