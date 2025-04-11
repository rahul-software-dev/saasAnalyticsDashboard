const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  tenantId: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  role: Joi.string().optional(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
};