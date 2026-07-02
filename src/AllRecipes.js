import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";

function AllRecipes({randomRecipes}) {
console.log(randomRecipes)
const [randomRecipeDetails, setRandomRecipeDetails] = useState([])
const [recipeCache, setRecipeCache] = useState([])
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = process.env.REACT_APP_SPOON_API_KEY;

const popover = (
    <Popover className="random-pop">
        <Popover.Header as="h6">
          Recipe Details
           
        </Popover.Header>
       <Popover.Body>
       Directions:
        <p>{randomRecipeDetails.instructions}</p>
        Ingredients:
        <p>{randomRecipeDetails.extendedIngredients?.map((ing) => ing.name + ", ")}</p> 
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
        console.log(res.status)
         return res.json()})
    .then((json) => {
        console.log(json)

        setRecipeCache((prev) => ({...prev, [json.id]: json}))

        setRandomRecipeDetails(json)
       
        
       
    })
// }
}


    return (
        // <OverlayTrigger trigger="hover" placement="right" overlay={popover} >
        <div className="all-recipes">
            <h4>All Recipes</h4>
           {randomRecipes ? randomRecipes.map((rec) => (
            <OverlayTrigger  trigger="hover" placement="right" overlay={popover} >
            <div onMouseEnter={() => callFetch(rec.id)} className="random">
            <p>{rec.title}</p>
            <img src={rec.image} alt={rec.name}></img>
            </div>
            </OverlayTrigger>
           )) : null }
        </div>
    

    )
}

export default AllRecipes