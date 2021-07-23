const { awardsService } = require('../service');

module.exports = {
    getAllAwards: async (req, res, next) => {
        try {
            const awards = await awardsService.findAllAwards();

            res.json(awards);
        } catch (e) {
            next(e);
        }
    }
};
