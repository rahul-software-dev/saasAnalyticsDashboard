const Session = require('../models/Session');

const getAllSessions = async () => Session.find().sort({ loginTime: -1 });

module.exports = {
  getAllSessions,
};