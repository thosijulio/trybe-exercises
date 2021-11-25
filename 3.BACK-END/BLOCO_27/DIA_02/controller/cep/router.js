const express = require('express');
const verifyCep = require('../../middleware/verifyCep');
const service = require('../../service');

const router = express.Router({ mergeParams: true });

router.get('/:cep', verifyCep, async (req, res) => {
  const { cep } = req.params;
  const { status, message } = await service.cep.findByCep(cep);
  res.status(status).send(message);
})

router.post('/', async (req, res) => {
  const address = req.body;
  const result = await service.cep.createAddress(address); 

  res.status(200).send(address);
});

module.exports = router;
