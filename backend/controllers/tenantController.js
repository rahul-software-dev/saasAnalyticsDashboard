const Tenant = require('../models/Tenant');
const User = require('../models/User');

exports.createTenant = async (req, res) => {
    try {
        const { name } = req.body;
        const tenant = new Tenant({ name });
        await tenant.save();
        res.status(201).json({ message: 'Tenant created', tenantId: tenant._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.assignUserToTenant = async (req, res) => {
    try {
        const { userId, tenantId } = req.body;
        await User.findByIdAndUpdate(userId, { tenant: tenantId });
        res.status(200).json({ message: 'User assigned to tenant' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};