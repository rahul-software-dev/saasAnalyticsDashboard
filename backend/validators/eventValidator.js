const Joi = require('joi');

const eventSchema = Joi.object({
  eventType: Joi.string().required(),
  userId: Joi.string().required(),
  feature: Joi.string().required(),
  timestamp: Joi.date().iso().required(),
  metadata: Joi.object().optional(),
});

module.exports = {
  eventSchema,
};