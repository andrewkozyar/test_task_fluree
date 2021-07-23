const { dataBaseTablesEnum, responseCodesEnum, responseMessagesEnum } = require('../constant');
const { footballService } = require('../service');

module.exports = {
    getAllFootball: async (req, res, next) => {
        try {
            const football = await footballService.findAllFootball();

            res.json(football);
        } catch (e) {
            next(e);
        }
    },

    createFootball: async (req, res, next) => {
        try {
            await footballService.createFootball({ ...req.body, _id: dataBaseTablesEnum.FOOTBALL });

            res.status(responseCodesEnum.CREATED).json(responseMessagesEnum.create);
        } catch (e) {
            next(e);
        }
    },

    getFootballByCountry: async (req, res, next) => {
        try {
            const { country } = req.params;

            const football = await footballService.findFootballByCountry(country);

            res.json(football);
        } catch (e) {
            next(e);
        }
    }
};
