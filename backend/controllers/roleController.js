const Role = require('../models/Role');
const User = require('../models/User');

exports.createRole = async (req, res) => {
    try {
        const { name, permissions } = req.body;
        const role = new Role({ name, permissions });
        await role.save();
        res.status(201).json({ message: 'Role created' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.assignRoleToUser = async (req, res) => {
    try {
        const { userId, roleId } = req.body;
        await User.findByIdAndUpdate(userId, { role: roleId });
        res.status(200).json({ message: 'Role assigned to user' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};