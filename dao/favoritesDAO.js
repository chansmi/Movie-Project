let favoritesCollection;

export default class FavoritesDAO {
    static async injectDB(conn) {
        if (favoritesCollection) {
            return; 
        }
        try {
            favoritesCollection = await conn.db(process.env.MOVIEREVIEWS_NS).collection('favorites'); //ties into mongodb favorites
        } catch(e) {
            console.error(`Unable to connect in FavoritesDAO: ${e}`);
        }
    }

    static async updateFavorites( userId, favorites) {
        try {
            const updateResponse = await favoritesCollection.updateOne(
            { _id: userId },
            { $set: { favorites: favorites }},
            { upsert: true }
            )
        return updateResponse
        }
        catch(e) { console.error( `Unable to update favorites: ${e}`);
        return { error: e };
        }
    }

    static async getFavorites(id) {
        let cursor;
        try {
            cursor = await favoritesCollection.find({
                _id: id
            });
            const favorites = await cursor.toArray();
            return favorites[0];
        } catch(e) {
            console.error(`Something went wrong in getFavorites: ${e}`);
            throw e;
        }
    }
}
// added to retrieve an array of favs by
//return a collection of favorite movies based on a list of IDs, I think you want to use find and $in.
// next() returns a value done and next. 
// $in array - matches value in an array
/*
    static async getFavoritesById(id){
        try {
          return await favoritesCollection.find([
            {
              _id: { $in: {id}}
            }
          ]).next();
        } catch(e) {
          console.error(`Something went wrong in getFavoritesById: ${e}`);
        } throw e
      }
  }
    // keep track of favorites in an array?
    */