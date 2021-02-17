const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const readFile = require('../utils/readFile');

router.get('/', (req, res) => {
  readFile('../data/users.json')
    .then(data => {
      res.send(data);
    });
});
router.get('/:id', (req, res) => {
  readFile('../data/users.json')
    .then(data => {
      const { id } = req.params;

      const user = data.filter(item => item._id === id);

      user.length ?
        res.send(user) :
        res.status(404).send({ message: 'Page not found' });
    });
});

module.exports = router;
