import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;
let books;

export default class BooksDAO {

  static async injectDB(conn) {
    if (books) {
      return;
    }
    try {
      books = await conn.db(process.env.BOOKREVIEWS_NS).collection('books');
    } catch(e) {
      console.error(`Unable to connect in BooksDAO: ${e}`);
    }
  }

  static async getBooks({
    filters = null,
    page = 0,
    booksPerPage = 20,
  } = {}) { //empty object is default parameter in case arg is undefined
    let query;
    if (filters) {
        if ("title" in filters) {
          query = { $text: { $search: filters['title'] } };
        } else if ("rated" in filters) {
          query = { "rated": { $eq: filters['rated'] } };
        }
  }
    let cursor;
    try {
      cursor = await books.find(query)
                          .limit(booksPerPage)
                          .skip(booksPerPage * page);
      const booksList = await cursor.toArray();
      const totalNumBooks = await books.countDocuments(query);
      return { booksList, totalNumBooks };
    } catch(e) {
      console.error(`Unable to issue find command, ${e}`);
      return { booksList: [], totalNumBooks: 0 };
    }
  }

  static async getRatings() {
    let ratings = [];
    try {
      ratings = await books.distinct("rated");
      return ratings;
    } catch(e) {
      console.error(`Unable to get ratings, ${e}`);
      return { ratings };
    }
  }

  static async getBookById(id){
    try {
      return await books.aggregate([
        { $match: {
            _id: new ObjectId(id),
          } },
        { $lookup: {
            from: 'reviews',
            localField: '_id',
            foreignField: 'book_id',
            as: 'reviews',
          } }
      ]).next();
    } catch(e) {
      console.error(`Something went wrong in getBookById: ${e}`);
      throw e;
    }
  }
}
