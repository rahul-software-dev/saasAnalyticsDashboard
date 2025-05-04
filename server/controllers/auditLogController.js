const AuditLog = require('../models/AuditLog');

// List logs with filtering (by user, action, date)
exports.getLogs = async (req, res) => {
  try {
    // You can add filtering logic here (e.g., req.query.user, req.query.action, req.query.date)
    const logs = await AuditLog.find({ tenant: req.user.tenant })
      .sort({ createdAt: -1 })
      .limit(100);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Export audit logs (stub)
exports.exportLogs = (req, res) => {
  res.status(501).json({ message: 'Export logs not implemented yet' });
};
