const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    permissions: [{ type: String }],
    tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
}, { timestamps: true });

module.exports = mongoose.model('Role', roleSchema);