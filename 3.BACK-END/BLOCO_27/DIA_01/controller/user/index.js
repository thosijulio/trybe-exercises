const express = require('express');
const { ObjectId } = require('mongodb');

const db = require('../../model/index');
const verifyUser = require('../middleware/verifyUser');
const verifyId = require('../middleware/verifyId');

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

router.get('/:id', verifyId, async (req, res) => {
  const { id } = req.params;
  const user = await db.user.find(id);
  res.status(200).json(user);
});

router.get('/', async (req, res) => {
  const user = await db.user.find();
  res.status(200).json(user);
});

module.exports = router;
