const router = require('express').Router();

const { awardsController } = require('../controller');

router.get('/', awardsController.getAllAwards);

module.exports = router;
