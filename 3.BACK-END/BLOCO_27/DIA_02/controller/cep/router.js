const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/:cep', (req, res) => {
  res.status(200).send('teste');
})

module.exports = router;