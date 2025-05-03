// server/models/AuditLog.js
const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  tenant:      { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action:      { type: String, required: true },
  details:     { type: Object },
  createdAt:   { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuditLog', auditLogSchema);
