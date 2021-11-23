const express = require('express');

const db = require('../../model/index');
const verifyUser = require('../middleware/verifyUser');

const router = express.Router({ mergeParams: true });

router.post('/', verifyUser, async (req, res, next) => {
  const user = req.body;
  try {
    const returnedUser = await db.user.create(user);
    res.status(201).json(returnedUser);    
  } catch (error) {
    next(error);
  };
});

router.get('/', async (req, res) => {
  const user = await db.user.find();
  res.status(200).json(user);
});

module.exports = router;
