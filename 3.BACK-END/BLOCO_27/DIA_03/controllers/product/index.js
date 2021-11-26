const express = require('express');
const update = require('./update');
const read = require('./read');
const readById = require('./readById');
const remove = require('./remove');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.get('/:id', readById);

router.get('/', read);

router.post('/', create);

router.delete('/:id', remove);

router.put('/:id', update);

module.exports = router;
