
import Recipe from "./Recipe";



function RecipesContainer({recipes}) {
    console.log(recipes)




    return ( <div className="recipe-container">
         <h2>Get Your Recipes!</h2>
          {recipes.map((rec) => <Recipe key={rec.id} rec={rec}></Recipe>)}

    </div>)
}

export default RecipesContainer