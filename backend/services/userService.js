const User = require('../models/User');

const getAllUsers = async (tenantId) => User.find({ tenantId });

const getUserById = async (id) => User.findById(id);

const updateUser = async (id, data) => User.findByIdAndUpdate(id, data, { new: true });

const deleteUser = async (id) => User.findByIdAndDelete(id);

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};