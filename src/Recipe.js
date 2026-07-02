import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import { useRef } from "react";
import { useState } from "react";
import Popover from "react-bootstrap/Popover";
import  Tooltip  from "react-bootstrap/Tooltip"

function Recipe({rec, favorites, setFavorites, recipes, nutrition, setNutrition}) {
console.log(rec)
const apiKey = process.env.REACT_APP_SPOON_API_KEY;

// const [liked, setLiked] = useState(false)
const [recipeDetails, setRecipeDetails] = useState(null)
const [recipeCache, setRecipeCache] = useState({})


function handleClick(id) {
    console.log("Cache:", recipeCache);
    if (recipeCache[id]) {
        console.log("loaded from cache")
        setRecipeDetails(recipeCache[id])
        setNutrition(recipeCache[id].nutrition)
        return
    }
    console.log("loaded from fetch")
    fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`)
    .then((res) => {
        console.log(res.status)
         return res.json()})
    .then((json) => {
        console.log(json)

        setRecipeCache((prev) => ({...prev, [json.id]: json}))

        setRecipeDetails(json)
       setNutrition(json.nutrition)
        
       
    })
}


const popover = (
    <Popover className="recipe-popover" id="popover">
        <Popover.Header as="h6">Recipe Details</Popover.Header>
        <Popover.Body>
            {recipeDetails ? (
                <>
                <label className="label">Servings:</label>
          <p>{recipeDetails.servings}</p>
          <label className="label">Cook Time:</label>
          <p>{recipeDetails.readyInMinutes}</p>
          <label className="label">Ingredients:</label>
          <p>{recipeDetails?.extendedIngredients?.map((ing) => ing.name + ", ")}</p>
          <label className="label">Directions:</label>
          <p> {recipeDetails.instructions}</p> 
         </>
            ) : (
                <p>..Loading</p>
            )}
        </Popover.Body>
    </Popover>
);


function handleLike(e, id) {
    console.log(e)
    console.log(id)
     e.stopPropagation(); 
if (favorites.some((rec) => rec.id === id)) {
    let updated = favorites.filter((rec) => rec.id !== id)
    setFavorites(updated)
} else {
    setFavorites((prev) => [...prev, rec])
}

}


const liked = favorites.some((reci) => reci.id === rec.id)

    return (
   
        <OverlayTrigger  placement="left" overlay={popover}>
        <div role="button" onClick={() => handleClick(rec.id)} className="recipe">
              <button className="like-btn" aria-label={liked ? "Remove from favorites" : "Add to favorites"} onClick={(e) => handleLike(e, rec.id)}> 
               <i aria-hidden="true" className={liked ? "bi bi-heart-fill" : "bi bi-heart"}></i> 
            </button>

          
          <h5>{rec.title}</h5>
           <OverlayTrigger trigger="hover" placement="top" overlay={<Tooltip id="detail-tooltip">
      Click For Recipe Details
    </Tooltip>}>
          <img src={rec.image}></img>
          </OverlayTrigger>
        </div>
        </OverlayTrigger>
        
    )
}

export default Recipe