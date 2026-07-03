import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";

function AllRecipes({randomRecipes}) {
console.log(randomRecipes)
const [randomRecipeDetails, setRandomRecipeDetails] = useState([])
const [recipeCache, setRecipeCache] = useState({})

const apiKey = process.env.REACT_APP_SPOON_API_KEY;

const popover = (
    <Popover className="random-pop">
        <Popover.Header  as="h6">
          Recipe Details
          
           
        </Popover.Header>
       <Popover.Body>
        {randomRecipeDetails ? (
                <>
                <label className="label">Servings:</label>
          <p>{randomRecipeDetails.servings}</p>
          <label className="label">Cook Time:</label>
          <p>{randomRecipeDetails.readyInMinutes}</p>
          <label className="label">Ingredients:</label>
          <p>{randomRecipeDetails?.extendedIngredients?.map((ing) => ing.name + ", ")}</p>
          <label className="label">Directions:</label>
          <p> {randomRecipeDetails.instructions}</p> 
         </>
            ) : (
                <p>..Loading</p>
            )}
       </Popover.Body>
     </Popover>

)

function callFetch(id) {
    // function handleClick(id) {
    console.log("Cache:", recipeCache);
    if (recipeCache[id]) {
        console.log("loaded from cache")
        setRandomRecipeDetails(recipeCache[id])
        
        return
    }
    console.log("loaded from fetch")
    fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`)
    .then((res) => {
        if(!res.ok) {
            throw new Error(res.status)
        }
         return res.json()})
    .then((json) => {
        console.log(json)

        setRecipeCache((prev) => ({...prev, [json.id]: json}))

        setRandomRecipeDetails(json)
       
        
       
    })
// }
}


    return (
       
        <div className="all-recipes">
            <h4>All Recipes</h4>
            <p>Click recipe for details.</p>
           {randomRecipes ? randomRecipes.map((rec) => (
            <OverlayTrigger  trigger="click" placement="right" overlay={popover} >
            <div onClick={() => callFetch(rec.id)} className="random">
            <p>{rec.title}</p>
            <img src={rec.image} alt={rec.name}></img>
            </div>
            </OverlayTrigger>
           )) : null }
        </div>
    

    )
}

export default AllRecipes