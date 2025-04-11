const bcrypt = require('bcrypt');

const hashPassword = async (password) => await bcrypt.hash(password, 10);

const comparePassword = async (inputPassword, hashedPassword) =>
  await bcrypt.compare(inputPassword, hashedPassword);

module.exports = {
  hashPassword,
  comparePassword,
};