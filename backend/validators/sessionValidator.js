const Joi = require('joi');

const sessionQuerySchema = Joi.object({
  userId: Joi.string().optional(),
  active: Joi.boolean().optional(),
});

module.exports = {
  sessionQuerySchema,
};