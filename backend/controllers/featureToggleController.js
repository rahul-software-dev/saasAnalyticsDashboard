const Feature = require('../models/Feature');

exports.toggleFeature = async (req, res) => {
    try {
        const { featureId, enabled } = req.body;
        await Feature.findByIdAndUpdate(featureId, { enabled });
        res.status(200).json({ message: `Feature ${enabled ? 'enabled' : 'disabled'}` });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};