const router = require('express').Router();

const { footballController } = require('../controller');
const { footballMiddleware } = require('../middleware');

router.get('/', footballController.getAllFootball);
router.get('/:country', footballController.getFootballByCountry);
router.post('/', footballMiddleware.isFootballValid, footballController.createFootball);

module.exports = router;
