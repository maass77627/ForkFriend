import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Ingredients({ingredients, recipeIngredients, setRecipeIngredients, getRecipes}) {
  console.log(ingredients)
    // const [selectedIngredients, setSelectedIngredients] = useState([])
    const [selected, setSelected] = useState([])
    const [filter, setFilter] = useState("all")
   
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

   
  
    const categories = ingredients.map((ing) => ing.category)
    const uniqcategories = [...new Set(categories)]
    let filteredIng = ingredients.filter((ing) => {
      if (filter === "all") {
        return ing
      }
      return ing.category === filter
    })

return (
  <div className="ingredient-wrap">
    <h5>Choose Your Ingredients...</h5>

    <p>Filter Ingredients:</p><form onChange={(e) => setFilter(e.target.value)}>
     <select>
      <option value="all"></option>
      {
        
        uniqcategories.map((cat) =>(
          <option value={cat}>{cat}</option>
        ))
      }
     </select>
    </form>
    <div className="ingredient-grid">

      {(filteredIng || ingredients).map((ingredient) => {
        const isSelected = selected.includes(ingredient.id);

        return (
          <div
            key={ingredient.id}
            onClick={() => handleClick(ingredient.id)}
            className={`ingredient-card ${isSelected ? "active" : ""}`}
          >
            <h6>{ingredient.name}</h6>

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