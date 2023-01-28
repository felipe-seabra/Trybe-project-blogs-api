const Joi = require('joi');

const newUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const newCategorySchema = Joi.object({
  name: Joi.string().min(3).required(),
});

module.exports = {
  newUserSchema,
  newCategorySchema,
};