


function Favorite({fav, favorites, setFavorites}) {
console.log(fav)

function handleDelete(e,id) {
    console.log(e.target)
    console.log(id)
    // e.target.parentNode.remove()
    let updated = favorites.filter((favr) => favr.id !== id)
    setFavorites(updated)

}


    return (
        <div className="favorite">
            <button onClick={(e) => handleDelete(e,fav.id)} className="delete-button">X</button>
            <p>{fav.name}</p>
            <img src={fav.image} alt={fav.name}></img>
            
        </div>

    )
}

export default Favorite