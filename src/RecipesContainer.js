
import Recipe from "./Recipe";



function RecipesContainer({recipes, setFavorites, favorites}) {
    console.log(recipes)




    return ( <div className="recipe-container">
         <h4>Recommended Recipes</h4>
          {recipes.map((rec) => <Recipe favorites={favorites} setFavorites={setFavorites} recipes={recipes} key={rec.id} rec={rec}></Recipe>)}

    </div>)
}

export default RecipesContainer