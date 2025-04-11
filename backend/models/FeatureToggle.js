const mongoose = require('mongoose');

const featureToggleSchema = new mongoose.Schema({
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
    featureName: { type: String, required: true },
    isEnabled: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('FeatureToggle', featureToggleSchema);