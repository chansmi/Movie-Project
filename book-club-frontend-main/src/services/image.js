import axios from "axios";

class ImageDataService {
    
    getImage(id) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${id}`);
    }
}

export default new ImageDataService();
