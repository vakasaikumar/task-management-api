const Joi = require('joi');

const taskValidationSchema = Joi.object({
    title: Joi.string().max(100).required(),
    description: Joi.string().optional(),
    status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED').optional(),
    priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH').required(),
    dueDate: Joi.date().optional(),
});

const validateTask = (req, res, next) => {
    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

module.exports = validateTask;
