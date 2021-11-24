const express = require('express');
const ping = require('./ping/router');

const mainRouter = express.Router({ mergeParams: true });

mainRouter.use('/ping', ping);

module.exports = mainRouter;
