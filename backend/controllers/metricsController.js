const Metrics = require('../models/Metrics');

exports.trackUserAction = async (req, res) => {
    try {
        const { userId, action, feature, timestamp } = req.body;
        const metric = new Metrics({ userId, action, feature, timestamp });
        await metric.save();
        res.status(201).json({ message: 'User action tracked' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEngagementMetrics = async (req, res) => {
    try {
        const metrics = await Metrics.aggregate([
            { $group: { _id: '$feature', count: { $sum: 1 } } }
        ]);
        res.status(200).json({ metrics });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};