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

router.post(
  '/login',
  emailAuth,
  passwordAuth,
  (_req, res) => {
    const token = (Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)).substr(0, 12);
    return res.status(200).json({ token });
  },
  (err, req, res, next) => {
    return res.status(400).json({ message: 'email or password is incorrect' });
  }
);

router.use((err, _req, res, _next) => {
  return res.status(401).json(err.message);
});

module.exports = router;