const Feedback = require('../models/Feedback');

const submitFeedback = async (data) => new Feedback(data).save();

const getFeedback = async (tenantId) => Feedback.find({ tenantId });

module.exports = {
  submitFeedback,
  getFeedback,
};