const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUserRole = async (req, res) => {
    try {
        const { userId, role } = req.body;
        await User.findByIdAndUpdate(userId, { role });
        res.status(200).json({ message: 'User role updated' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};