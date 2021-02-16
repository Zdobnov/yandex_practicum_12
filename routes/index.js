// import global modules
const router = require('express').Router();

// import local modules
const cardsRouter = require('./cards');
const usersRouter = require('./users');

// routes usage
router.use('/cards', cardsRouter);
router.use('/users', usersRouter);

router.use((req, res) => {
  res.status(404).send({ message: 'Page not found' });
});

// module export
module.exports = router;
