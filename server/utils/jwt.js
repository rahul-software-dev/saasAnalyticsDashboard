// server/utils/jwt.js
const jwt = require('jsonwebtoken');

exports.sign = (payload, expiresIn = '1d') => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

exports.verify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};
