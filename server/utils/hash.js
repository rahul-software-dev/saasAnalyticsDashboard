// server/utils/hash.js
const bcrypt = require('bcryptjs');

exports.hash = async (plain, rounds = 10) => {
  return bcrypt.hash(plain, rounds);
};

exports.compare = async (plain, hashed) => {
  return bcrypt.compare(plain, hashed);
};
