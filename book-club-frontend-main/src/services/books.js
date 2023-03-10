import axios from "axios";

class BookDataService {
    
    getAll(page = 0) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/books?page=${page}`);
    }

    find(query, by="title", page=0) {
        return axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/v1/books?${by}=${query}&page=${page}`
        );
    }

    getBook(id) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/books/id/${id}`);
    }

    // Saving these services for later
    getRatings() {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/books/ratings`);
    }

    createReview(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/books/review`, data);
      }

    updateReview(data) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/books/review`, data);
    }

    deleteReview(data) {
    return axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/books/review`,
        { data });
    }

}

export default new BookDataService();
