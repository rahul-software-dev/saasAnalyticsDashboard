const Session = require('../models/Session');

exports.getActiveSessions = async (req, res) => {
    try {
        const sessions = await Session.find({ isActive: true });
        res.status(200).json({ sessions });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};