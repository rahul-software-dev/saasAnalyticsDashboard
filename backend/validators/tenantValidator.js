const Joi = require('joi');

const createTenantSchema = Joi.object({
  name: Joi.string().required(),
  plan: Joi.string().valid('free', 'pro', 'enterprise').required(),
});

const updateTenantSchema = Joi.object({
  name: Joi.string().optional(),
  plan: Joi.string().valid('free', 'pro', 'enterprise').optional(),
});

module.exports = {
  createTenantSchema,
  updateTenantSchema,
};