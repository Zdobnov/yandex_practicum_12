const router = require('express').Router();
const path = require('path');

const readFile = require('../utils/readFile');

router.get('/', (req, res) => {
  readFile('../data/cards.json')
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
