const router = require('express').Router();

const footballRouter = require('./football.router');
const teamRouter = require('./team.router');
const awardsRouter = require('./awards.router');

router.use('/football', footballRouter);
router.use('/team', teamRouter);
router.use('/awards', awardsRouter);

module.exports = router;
