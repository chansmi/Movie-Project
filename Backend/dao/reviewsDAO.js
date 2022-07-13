import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {

  static async injectDB(conn) {
    if (reviews) {
      return;
    }
    try {
      reviews = await conn.db(process.env.MOVIEREVIEWS_NS).collection('reviews');
    } catch(e) {
      console.error(`Unable to establish connection handle in reviewsDAO: ${e}`);
    }
  }

  static async addReview(movieId, user, review, date) {
    try {
      const reviewDoc = {
        name: user.name,
        user_id: user._id,
        date: date,
        review: review,
        movie_id: ObjectId(movieId)
      }
      return await reviews.insertOne(reviewDoc);
    }
    catch(e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e };
    }
  }

  //Update review TODO
  static async updateReview(reviewId, user, review, date) {
    try {
      const reviewDoc = {
        name: user.name,
        user_id: user._id,
        date: date,
        review: review,
      }
      return await reviews.updateOne({ _id: ObjectId(reviewId)}, {$set:reviewDoc}); //editing

    }
    catch(e) {
      console.error(`Unable to put review: ${e}`)
      return { error: e };
    }
  }

  //Delete review todo

  static async deleteReview(reviewId, user) {
    try {
      return await reviews.deleteOne({ _id: ObjectId(reviewId)}); //editing
    }
    catch(e) {
      console.error(`Unable to delete review: ${e}`)
      return { error: e };
    }
  }
}
