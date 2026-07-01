
import Favorite from "./Favorite";

function FavoritesContainer({favorites, setFavorites}) {

console.log(favorites)


    return (
        <div className="favorite-container">
            <h4>Favorites Container</h4>
            {
                favorites.map((fav) => <Favorite setFavorites={setFavorites} favorites={favorites} key={fav.id} fav={fav}></Favorite>)
            }

        </div>
    )
}

export default FavoritesContainer