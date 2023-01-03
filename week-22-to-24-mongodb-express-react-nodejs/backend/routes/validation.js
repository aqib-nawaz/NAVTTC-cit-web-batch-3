const joi = require("joi");

function regValidation(data) {
    const schema = joi.object({
        name: joi.string().required().min(3).max(20),
        email: joi.string().email().required(),
        password: joi.string().required().min(6).max(20),
        address: joi.string().min(6).max(100)
    });

    return schema.validate(data);
}

function loginValidation(data) {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required().min(6).max(20)
    });

    return schema.validate(data);
}

module.exports.loginValidation = loginValidation;
module.exports.regValidation = regValidation;
