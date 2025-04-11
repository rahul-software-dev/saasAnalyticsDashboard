const Joi = require('joi');

const toggleSchema = Joi.object({
  featureName: Joi.string().required(),
  enabled: Joi.boolean().required(),
});

module.exports = {
  toggleSchema,
};