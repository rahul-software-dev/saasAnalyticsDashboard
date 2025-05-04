// server/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Login handler
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, role: user.role, tenant: user.tenant },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.json({
      token,
      user: { id: user._id, email: user.email, role: user.role, tenant: user.tenant }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Registration handler
exports.register = async (req, res) => {
  const { email, password, tenant } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: 'Email already in use' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed, tenant });
    res.status(201).json({ id: user._id, email: user.email, tenant: user.tenant });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Forgot Password (stub)
exports.forgotPassword = (req, res) => {
  res.status(501).json({ message: 'Forgot password not implemented yet' });
};

// Reset Password (stub)
exports.resetPassword = (req, res) => {
  res.status(501).json({ message: 'Reset password not implemented yet' });
};

// Invite User (stub)
exports.inviteUser = (req, res) => {
  res.status(501).json({ message: 'Invite user not implemented yet' });
};
