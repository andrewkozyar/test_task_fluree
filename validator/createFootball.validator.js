const Joi = require('joi');

module.exports = Joi.object({
    _id: Joi
        .string(),
    name: Joi
        .string()
        .required(),
    country: Joi
        .string()
        .required(),
    createDay: Joi
        .string(),
    team: Joi
        .array()
});
