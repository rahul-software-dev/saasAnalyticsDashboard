const AuditLog = require('../models/AuditLog');

const logAction = async (data) => new AuditLog(data).save();

const getAuditLogs = async () => AuditLog.find().sort({ timestamp: -1 });

module.exports = {
  logAction,
  getAuditLogs,
};