const Tenant = require('../models/Tenant');

const getAllTenants = async () => Tenant.find();

const createTenant = async (data) => new Tenant(data).save();

const updateTenant = async (id, data) => Tenant.findByIdAndUpdate(id, data, { new: true });

module.exports = {
  getAllTenants,
  createTenant,
  updateTenant,
};