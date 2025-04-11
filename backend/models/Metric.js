const mongoose = require('mongoose');

const metricSchema = new mongoose.Schema({
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['pageview', 'click', 'session', 'custom'], required: true },
    data: { type: mongoose.Schema.Types.Mixed },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Metric', metricSchema);