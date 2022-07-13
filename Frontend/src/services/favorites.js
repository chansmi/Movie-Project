import axios from "axios";
//All that remains to be done is to write the favorites to the database any time they change, 
//and to load the favorites from the database when the website is first displayed.
class FavoritesDataService  {
//return from db
getAll(userId) {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/favorites/${userId}`);
    }
//Write to db
  updateFavoritesList(data) {
    return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/movies/favorites`, data);
  }
}

export default new FavoritesDataService();