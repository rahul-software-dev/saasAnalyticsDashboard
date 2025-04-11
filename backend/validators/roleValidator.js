const Joi = require('joi');

const assignRoleSchema = Joi.object({
  userId: Joi.string().required(),
  role: Joi.string().required(),
});

const createRoleSchema = Joi.object({
  name: Joi.string().required(),
  permissions: Joi.array().items(Joi.string()).required(),
});

module.exports = {
  assignRoleSchema,
  createRoleSchema,
};