const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
    deviceInfo: { type: String },
    loginTime: { type: Date, default: Date.now },
    logoutTime: { type: Date }
});

module.exports = mongoose.model('Session', sessionSchema);