import FavoritesDAO from '../dao/favoritesDAO.js';
import MoviesDAO from '../dao/moviesDAO.js';

export default class FavoritesController {
        //this corresponds to front end favs.js server
    static async apiUpdateFavorites(req, res, next) {
        //console.log("error in api update")
        //console.log(req.body._id,
        //    req.body.favorites)
        try {
            const FavoritesResponse = await FavoritesDAO.updateFavorites(
                req.body._id,
                req.body.favorites
            )

            var { error } = FavoritesResponse
            if (error) {
                //console.log("anything I want :)") // not throwing an error
                res.status(500).json({ error });
            }

            if (FavoritesResponse.modifiedCount === 0) {
                throw new Error("Unable to update favorites.")
            }
            res.json({ status: "success "});
        } catch(e) {
            //console.log("anything #2")
            res.status(500).json({ error: e.message })        
        }
    }

    static async apiGetFavorites(req, res, next) {
        //console.log("error in apiGetFavorites")
        try {
            let id = req.params.userId;
            let favorites = await FavoritesDAO.getFavorites(id);
            if (!favorites) {
                res.status(404).json({ error: "not found" });
                return;
            }
            res.json(favorites);
        } catch(e) {
            console.log(`API, ${e}`);
            res.status(500).json({ error: e });
        }
    }
    // added - this should get array - Not sure this is needed
    static async apiGetFavoritesById( req, res ){
        try {
            let id = req.params.userId;
            let favMoviesId = await FavoritesDAO.getFavorites(id)
            favMoviesId = favMoviesId["favorites"]
            var i;
            var temp;
            //console.log(favMoviesId)
            
            let favMovies = []
            for (i = 0; i < favMoviesId.length; i++) {
                temp = await MoviesDAO.getMovieById(favMoviesId[i])
                temp = {
                    id : i + 1,
                    _id : temp._id,
                    title : temp.title,
                    poster : temp.poster
                }
                favMovies.push(temp)
            } 
            res.json(favMovies);

        } catch(e) {
          console.log(`API, ${e}`);
          res.status(500).json({ error: e });
        }
      }
}