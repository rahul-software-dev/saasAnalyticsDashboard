const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role, tenantId: user.tenantId },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

const hashPassword = async (password) => await bcrypt.hash(password, 10);

const comparePassword = async (plain, hash) => await bcrypt.compare(plain, hash);

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return null;
  const isMatch = await comparePassword(password, user.password);
  return isMatch ? user : null;
};

module.exports = {
  generateToken,
  hashPassword,
  comparePassword,
  authenticateUser,
};