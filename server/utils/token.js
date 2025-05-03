// server/utils/token.js
const crypto = require('crypto');

exports.generate = (length = 32) => {
  return crypto.randomBytes(length).toString('hex');
};
