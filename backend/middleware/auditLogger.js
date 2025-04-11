const AuditLog = require('../models/AuditLog');

module.exports = async (req, res, next) => {
    const userId = req.user?._id;
    const action = `${req.method} ${req.originalUrl}`;
    const metadata = {
        ip: req.ip,
        body: req.body,
        query: req.query
    };

    try {
        await AuditLog.create({
            userId,
            action,
            metadata,
            timestamp: new Date()
        });
    } catch (err) {
        console.warn('Audit log failed:', err.message);
    }

    next();
};