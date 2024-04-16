const { log } = require('console');
const ApiError = require('../error/ApiError');
const data = require('../models/data.js');

class BooKsController {
  async getAllBooks(req, res, next) {
    try {
      if (!data) {
        throw ApiError.badRequest('empty');
      }
      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getBooksId(req, res, next) {
    try {
      const { id } = req.params;
      const book = data.books.find((i) => (i.authorId = id));

      const author = data.authors.find((i) => (i.id = id));
      if (!book || author) {
        throw ApiError.badRequest("the book or author isn't exist");
      }
      return res.json({ book, author });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async createBook(req, res, next) {
    try {
      console.log('req.body', req.body);
      const { name, price, authorId } = req.body;

      data.books.push({ name, price, authorId });
      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateBook(req, res, next) {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const book = data.books.find((i) => i.authorId === id);
      if (!book) {
        throw ApiError.badRequest("Id isn't exist");
      }
      book.name = name;
      book.price = price;
      return res.json(book);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteBook(req, res, next) {
    try {
      const { id } = req.params;
      data.books = data.books.filter((i) => i.authorId !== id);
      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BooKsController();
