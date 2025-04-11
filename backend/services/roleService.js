const Role = require('../models/Role');

const getAllRoles = async () => Role.find();

const createRole = async (data) => new Role(data).save();

const updateRole = async (id, data) => Role.findByIdAndUpdate(id, data, { new: true });

const deleteRole = async (id) => Role.findByIdAndDelete(id);

module.exports = {
  getAllRoles,
  createRole,
  updateRole,
  deleteRole,
};