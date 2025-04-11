const Event = require('../models/Event');

const trackEvent = async (data) => new Event(data).save();

const getUserEvents = async (userId) => Event.find({ userId }).sort({ timestamp: -1 });

module.exports = {
  trackEvent,
  getUserEvents,
};