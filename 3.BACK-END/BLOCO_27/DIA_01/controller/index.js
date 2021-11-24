const express = require('express');
const userRouter = require('./user');

const router = express.Router({ mergeParams: true });

router.use('/user', userRouter);

module.exports = router;
