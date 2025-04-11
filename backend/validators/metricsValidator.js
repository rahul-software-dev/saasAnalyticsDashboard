const Joi = require('joi');

const metricsQuerySchema = Joi.object({
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required(),
  granularity: Joi.string().valid('hour', 'day', 'week').optional(),
});

module.exports = {
  metricsQuerySchema,
};