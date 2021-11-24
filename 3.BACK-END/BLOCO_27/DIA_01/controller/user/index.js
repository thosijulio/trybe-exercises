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
  return user.length ? res.status(200).json(user) : res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado",
  });
});

router.get('/', async (req, res) => {
  const user = await db.user.find();
  res.status(200).json(user);
});

router.put('/:id', verifyId, verifyUser, async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const result = await db.user.update(user, id);

  if(result.matchedCount) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado",
  });
  return res.status(200).json({
    id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  })
});

module.exports = router;
