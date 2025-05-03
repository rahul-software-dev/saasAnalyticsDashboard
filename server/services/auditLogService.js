// server/services/auditLogService.js
const AuditLog = require('../models/Auditlog');
const { Parser } = require('json2csv');

exports.logAction = async ({ tenant, user, action, details }) => {
  return AuditLog.create({
    tenant,
    user,
    action,
    details,
    createdAt: new Date()
  });
};

exports.getLogs = async (tenantId, { user, action, from, to, limit = 100 }) => {
  const query = { tenant: tenantId };
  if (user) query.user = user;
  if (action) query.action = action;
  if (from && to) query.createdAt = { $gte: new Date(from), $lte: new Date(to) };
  return AuditLog.find(query).sort({ createdAt: -1 }).limit(limit);
};

exports.exportLogs = async (tenantId, format = 'csv') => {
  const logs = await AuditLog.find({ tenant: tenantId }).lean();
  if (format === 'csv') {
    const parser = new Parser();
    return parser.parse(logs);
  }
  return logs;
};
