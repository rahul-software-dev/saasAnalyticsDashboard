const Metrics = require('../models/Metrics');

exports.getDashboardStats = async (req, res) => {
    try {
        const totalActions = await Metrics.countDocuments();
        const activeUsers = await Metrics.distinct('userId');
        res.status(200).json({ totalActions, activeUsers: activeUsers.length });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};