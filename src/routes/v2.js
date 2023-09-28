'use strict';

const express = require('express');
const dataModules = require('../models');
const bearer = require('../auth/middleware/bearer.js');
const acl = require('../auth/middleware/acl');

const router = express.Router();

router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

router.get('/:model', bearer, acl('read'), (req, res) => {

  res.status(200).send('READ');
});
router.post('/:model/', bearer, acl('write'), (req, res) => {

  res.status(200).send('WRITE');
});
router.put('/:model/:id', bearer, acl('update'), (req, res) => {

  res.status(200).send('UPDATE');
});
router.delete('/:model/:id', bearer, acl('delete'), (req, res) => {

  res.status(200).send('DELETE');
});

module.exports = router;