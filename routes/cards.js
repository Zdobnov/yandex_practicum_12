const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../data/cards.json'),
    {
      encoding: 'utf8',
    },
    (err, data) => {
      if (err) throw err;

      res.send(JSON.parse(data));
    }
  );
});

module.exports = router;
