const router = require('express').Router();

const { teamController } = require('../controller');

router.get('/', teamController.getAllTeam);
router.get('/:name', teamController.getPlayerByName);
router.post('/', teamController.createTeam);

module.exports = router;
