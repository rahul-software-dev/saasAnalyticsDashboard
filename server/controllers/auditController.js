// server/controllers/auditLogController.js
const AuditLog = require('../models/AuditLog');

exports.getLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find({ tenant: req.user.tenant }).sort({ createdAt: -1 }).limit(100);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
