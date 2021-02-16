const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/users.json'),
    {
      encoding: 'utf8',
    },
    (err, data) => {
      if (err) throw err;

      res.send(JSON.parse(data));
    }
  );
});
router.get('/:id', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/users.json'),
    {
      encoding: 'utf8',
    },
    (err, data) => {
      if (err) throw err;

      const id = req.params.id;

      const user = JSON.parse(data).filter(item => {
        return item._id === id;
      });

      user.length ?
        res.send(user) :
        res.status(404).send({ message: 'Page not found' });
    }
  );
});

module.exports = router;
