import express from 'express';
import BooksController from './books.controller.js';
import ReviewsController from './reviews.controller.js';
import GroupsController from './groups.controller.js';

const router = express.Router(); // get access to express router

router.route("/").get(BooksController.apiGetBooks);
router.route("/id/:id").get(BooksController.apiGetBookById);
router.route("/ratings").get(BooksController.apiGetRatings);
router
    .route("/review")
    .post(ReviewsController.apiPostReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview);

router
    .route("/groups")
    .put(GroupsController.apiUpdateGroups);

router
    .route("/groups/:userId")
    .get(GroupsController.apiGetGroups);

router.route("/id/:id").get(GroupsController.apiGetGroups);


export default router;