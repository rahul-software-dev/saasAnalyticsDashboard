const AuditLog = require('../models/AuditLog');

exports.getAuditLogs = async (req, res) => {
    try {
        const logs = await AuditLog.find().sort({ timestamp: -1 }).limit(100);
        res.status(200).json({ logs });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};