const Router = require('express');
const BooksController = require('../controllers/BooksController');
const router = new Router();

router.get('/', BooksController.getAllBooks);
router.get('/:id', BooksController.getBooksId);
router.post('/', BooksController.createBook);
router.put('/:id', BooksController.updateBook);
router.delete('/:id', BooksController.deleteBook);

module.exports = router;
