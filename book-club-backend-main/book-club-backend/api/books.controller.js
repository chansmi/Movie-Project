import BooksDAO from "../dao/booksDAO.js";

export default class BooksController {

  static async apiGetBooks(req, res, next) {
    const booksPerPage = req.query.booksPerPage ? parseInt(req.query.booksPerPage) : 20;
    const page = req.query.page ? parseInt(req.query.page) : 0;

    let filters = {};
    if (req.query.rated) {
      filters.rated = req.query.rated;
    } else if (req.query.title) {
      filters.title = req.query.title;
    }

    const {booksList, totalNumBooks} = await BooksDAO.getBooks({filters, page, booksPerPage});

    let response = {
      books: booksList,
      page: page,
      filters: filters,
      entries_per_page: booksPerPage,
      total_results: totalNumBooks,
    };
    res.json(response);
  }

  static async apiGetBookById(req, res, next) {
    try {
      let id = req.params.id || {}
      let book = await BooksDAO.getBookById(id);
      if (!book) {
        res.status(404).json({ error: "not found" })
        return;
      }
      res.json(book);
    } catch(e) {
      console.log(`API, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiGetRatings(req, res, next) {
    try {
      let propertyTypes = await BooksDAO.getRatings();
      res.json(propertyTypes);
    } catch(e) {
      console.log(`API, ${e}`);
      res.status(500).json({ error: e });
    }
  }

}
