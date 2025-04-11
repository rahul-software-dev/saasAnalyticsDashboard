const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
    eventName: { type: String, required: true },
    payload: { type: mongoose.Schema.Types.Mixed },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);