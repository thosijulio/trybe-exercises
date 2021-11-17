const express = require('express');

const { usernameAuth, passwordAuth, emailAuth } = require('../middlewares/authentication');

const router = express.Router();

router.post(
  '/register',
  passwordAuth,
  usernameAuth,
  emailAuth,
  (_req, res) => {
    return res.status(201).json({ message: 'user created' });
  }
);

router.use((err, _req, res, _next) => {
  return res.status(401).json(err.message);
});

module.exports = router;