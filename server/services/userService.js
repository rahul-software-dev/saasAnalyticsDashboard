// server/services/userService.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const emailService = require('./emailService');

exports.getUsers = async (tenantId, { page = 1, limit = 20, search }) => {
  const query = { tenant: tenantId };
  if (search) {
    query.$or = [
      { email: new RegExp(search, 'i') },
      { name: new RegExp(search, 'i') }
    ];
  }
  const users = await User.find(query)
    .select('-password')
    .skip((page - 1) * limit)
    .limit(limit);
  const total = await User.countDocuments(query);
  return { users, total };
};

exports.createUser = async (tenantId, data) => {
  const hashed = await bcrypt.hash(data.password, 10);
  return User.create({ ...data, password: hashed, tenant: tenantId });
};

exports.updateUser = async (tenantId, userId, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return User.findOneAndUpdate(
    { _id: userId, tenant: tenantId },
    data,
    { new: true }
  ).select('-password');
};

exports.deleteUser = async (tenantId, userId) => {
  return User.findOneAndDelete({ _id: userId, tenant: tenantId });
};

exports.inviteUser = async (tenantId, email) => {
  const token = crypto.randomBytes(32).toString('hex');
  // Store token in DB or cache with expiration, for demo just email it
  const inviteLink = `${process.env.FRONTEND_URL}/invite/accept?token=${token}`;
  await emailService.sendInvitation(email, inviteLink);
  return { email, inviteLink };
};

exports.updateUserRole = async (tenantId, userId, role) => {
  return User.findOneAndUpdate(
    { _id: userId, tenant: tenantId },
    { role },
    { new: true }
  ).select('-password');
};

exports.deactivateUser = async (tenantId, userId) => {
  return User.findOneAndUpdate(
    { _id: userId, tenant: tenantId },
    { isActive: false },
    { new: true }
  ).select('-password');
};

exports.reactivateUser = async (tenantId, userId) => {
  return User.findOneAndUpdate(
    { _id: userId, tenant: tenantId },
    { isActive: true },
    { new: true }
  ).select('-password');
};

exports.resetPassword = async (email, newPassword) => {
  const hashed = await bcrypt.hash(newPassword, 10);
  return User.findOneAndUpdate(
    { email },
    { password: hashed },
    { new: true }
  ).select('-password');
};
