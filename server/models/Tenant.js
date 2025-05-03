// server/models/Tenant.js
const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name:        { type: String, required: true, unique: true },
  plan:        { type: String, default: 'free' },
  isActive:    { type: Boolean, default: true },
  createdAt:   { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tenant', tenantSchema);
