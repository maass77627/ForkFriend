import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Ingredients({ingredients, recipeIngredients, setRecipeIngredients, getRecipes}) {
  console.log(ingredients)
    // const [selectedIngredients, setSelectedIngredients] = useState([])
    const [selected, setSelected] = useState([])
   
    const getImage = (image) => {
        return `https://img.spoonacular.com/ingredients_100x100/${image}`
    }
   
    function handleClick(id) {
        //  console.log(e.target)
         console.log(id)

         const updatedSelected = selected.includes(id) ? selected.filter((index) => index !== id) : [...selected, id]
         
         setSelected(updatedSelected)

         const updatedIngredients = ingredients.filter((ing) => updatedSelected.includes(ing.id))

         setRecipeIngredients(updatedIngredients)
         getRecipes(updatedIngredients)
    
    }
  

return (
  <div className="ingredient-wrap">
    <h3>Choose From Ingredients you have at home...</h3>
    <div className="ingredient-grid">

      {ingredients.map((ingredient) => {
        const isSelected = selected.includes(ingredient.id);

        return (
          <div
            key={ingredient.id}
            onClick={() => handleClick(ingredient.id)}
            className={`ingredient-card ${isSelected ? "active" : ""}`}
          >
            <h3>{ingredient.name}</h3>

            <img
              className="image-ingredient"
              src={getImage(ingredient.image)}
              alt={ingredient.name}
            />
          </div>
        );
      })}

    </div>
  </div>
);
}

export default Ingredients