const express = require('express');
const ping = require('./ping/router');
const cep = require('./cep/router');
const handleError = require('../middleware/handleError');

const mainRouter = express.Router({ mergeParams: true });

mainRouter.use('/ping', ping);
mainRouter.use('/cep', cep);

mainRouter.use(handleError);

module.exports = mainRouter;
