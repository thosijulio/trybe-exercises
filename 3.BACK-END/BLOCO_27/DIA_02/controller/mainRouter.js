const express = require('express');
const ping = require('./ping/router');
const cep = require('./cep/router');

const mainRouter = express.Router({ mergeParams: true });

mainRouter.use('/ping', ping);
mainRouter.use('/cep', cep);

module.exports = mainRouter;
