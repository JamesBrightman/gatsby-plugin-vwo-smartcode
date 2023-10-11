exports.pluginOptionSchema = ({ Joi }) => {
    return Joi.object({
        vwoAccountId: Joi.string().required().description("VWO Account Id found in your HTML SmartCode block."),
    });
};
