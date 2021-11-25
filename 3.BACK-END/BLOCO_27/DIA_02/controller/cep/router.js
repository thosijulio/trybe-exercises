const express = require('express');
const verifyCep = require('../../middleware/verifyCep');
const service = require('../../service');

const router = express.Router({ mergeParams: true });

router.get('/:cep', verifyCep, async (req, res) => {
  const { cep } = req.params;
  const { status, message } = await service.cep.findByCep(cep);
  res.status(status).send(message);
})

module.exports = router;
