const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    plan: { type: String, enum: ['free', 'pro', 'enterprise'], default: 'free' },
    limits: {
        users: { type: Number, default: 5 },
        storage: { type: Number, default: 500 } // in MB
    },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Tenant', tenantSchema);