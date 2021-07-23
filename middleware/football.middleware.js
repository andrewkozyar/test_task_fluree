const { errorCodesEnum, errorMessagesEnum } = require('../constant');
const { createFootballValidator } = require('../validator');

module.exports = {
    isFootballValid: async (req, res, next) => {
        try {
            const { error } = await createFootballValidator.validate(req.body);

            if (error) {
                throw new Error(res.status(errorCodesEnum.BAD_REQUEST).json(errorMessagesEnum.noValidData));
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};
