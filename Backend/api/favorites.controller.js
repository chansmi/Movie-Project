import FavoritesDAO from '../dao/favoritesDAO.js';

export default class FavoritesController {
        //this corresponds to front end favs.js server
    static async apiUpdateFavorites(req, res, next) {
        console.log("error in api update")
        try {
            const FavoritesResponse = await FavoritesDAO.updateFavorites(
                req.body._id,
                req.body.favorites
            )

            var { error } = FavoritesResponse
            if (error) {
                console.log("anything I want :)") // not throwing an error
                res.status(500).json({ error });
            }
            res.json({ status: "success "});
        } catch(e) {
            console.log("anything #2")
            res.status(500).json({ error: e.message })        
        }
    }

    static async apiGetFavorites(req, res, next) {
        console.log("error in apiGetFavorites")
        try {
            let id = req.param.userId;
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
}