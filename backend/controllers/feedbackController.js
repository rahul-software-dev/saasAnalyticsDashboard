const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
    try {
        const { userId, message, rating } = req.body;
        const feedback = new Feedback({ userId, message, rating });
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json({ feedback });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};