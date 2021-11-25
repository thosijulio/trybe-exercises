const express = require('express');
const verifyCep = require('../../middleware/verifyCep');

const router = express.Router({ mergeParams: true });

router.get('/:cep', verifyCep, (req, res) => {
  res.status(200).send('teste');
})

module.exports = router;
