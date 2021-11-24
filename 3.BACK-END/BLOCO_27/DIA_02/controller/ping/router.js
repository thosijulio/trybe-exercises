const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  res.status(200).send({ message: 'pong!' });
});

module.exports = router;
