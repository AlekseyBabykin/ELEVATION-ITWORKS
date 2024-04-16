const Router = require('express');
const router = new Router();
const booksRouter = require('./booksRouter');

router.use('/books', booksRouter);

module.exports = router;
