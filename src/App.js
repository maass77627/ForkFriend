
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FoodContainer from "./FoodContainer";
import { useEffect } from 'react';
import { useState } from "react";
import Ingredients from "./Ingredients";
import RecipesContainer from './RecipesContainer';
import FavoritesContainer from './FavoritesContainer';
import Nav from "./Nav";
import Footer from "./Footer";
import IngredientForm from "./IngredientForm";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const URL = "http://localhost:3000";
  const [ingredients, setIngredients] = useState([])
  const [recipeIngredients, setRecipeIngredients] = useState([])
  const [recipes, setRecipes] = useState([])
  const [favorites, setFavorites] = useState([])


// useEffect(() => {
  function getRecipes(ingredients) {
    console.log(ingredients)
    const fixedIngredients = ingredients.map((ing) => {
      return `${ing.name}` + "%2C"
    }).join("")

     console.log(fixedIngredients)
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${fixedIngredients}&number=5&ignorePantry=true&ranking=1`, {
  headers: {
    "X-RapidAPI-Key": apiKey,
   "Content-Type": "application/json",
   "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
  }
})
.then((res) => {
  console.log(res.status)
 return res.json()
}) 
.then((json) => {
  // let newRecipes = json.
  setRecipes(json)
  console.log(json)
})
  }

// }, [])

// useEffect(() => {
//   fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random`, {
//   headers: {
//     "X-RapidAPI-Key": apiKey,
//    "Content-Type": "application/json",
//    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
//   }
// })
// .then((res) => {
//   console.log(res.status)
//  return res.json()
// }) 
// .then((json) => {
//   console.log(json)
// })

// }, [])

useEffect(() => {
  fetch(`http://localhost:3000/ingredients`, {
  headers: {
   "Content-Type": "application/json",
  }
})
.then((res) => {
  console.log(res.status)
 return res.json()
}) 
.then((json) => {
  setIngredients(json)
  console.log(json)
})

}, [])




  return (
    <div className="App">
      
      <h1 className="title">Fork Friend</h1>

      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        {/* <Route path="/food" element={<FoodContainer></FoodContainer>}></Route> */}
        <Route path="/addingredient" element={<IngredientForm></IngredientForm>}></Route> 
         <Route path="/" element={
          <div className="main-layout">
          <Ingredients getRecipes={getRecipes} setRecipeIngredients={setRecipeIngredients} recipeIngredients={recipeIngredients} ingredients={ingredients}></Ingredients>
        
          <RecipesContainer favorites={favorites} setFavorites={setFavorites} recipes={recipes}></RecipesContainer>
          <FavoritesContainer favorites={favorites} setFavorites={setFavorites}></FavoritesContainer>
          </div>
          }></Route>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
