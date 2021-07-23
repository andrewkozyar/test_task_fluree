const { responseCodesEnum, responseMessagesEnum } = require('../constant');
const { teamService } = require('../service');

module.exports = {
    getAllTeam: async (req, res, next) => {
        try {
            const team = await teamService.findAllTeam();

            res.json(team);
        } catch (e) {
            next(e);
        }
    },

    createTeam: async (req, res, next) => {
        try {
            await teamService.createTeam(req.body);

            res.status(responseCodesEnum.CREATED).json(responseMessagesEnum.create);
        } catch (e) {
            next(e);
        }
    },

    getPlayerByName: async (req, res, next) => {
        try {
            const { name } = req.params;

            const football = await teamService.findPlayerByName(name);

            res.json(football);
        } catch (e) {
            next(e);
        }
    }
};
