
import Recipe from "./Recipe";



function RecipesContainer({ nutrition, setNutrition, recipes, setFavorites, favorites}) {
    console.log(recipes)




    return ( <div className="recipe-container">
         <h4 className="rr">Recommended Recipes</h4>
          {recipes?.map((rec) => <Recipe nutrition={nutrition} setNutrition={setNutrition} favorites={favorites} setFavorites={setFavorites} recipes={recipes} key={rec.id} rec={rec}></Recipe>)}

    </div>)
}

export default RecipesContainer