const Event = require('../models/Event');

exports.logEvent = async (req, res) => {
    try {
        const { userId, eventType, metadata } = req.body;
        const event = new Event({ userId, eventType, metadata });
        await event.save();
        res.status(201).json({ message: 'Event logged' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEventsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const events = await Event.find({ userId });
        res.status(200).json({ events });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};