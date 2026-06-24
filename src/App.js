
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FoodContainer from "./FoodContainer";
import { useEffect } from 'react';
import { useState } from "react";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;


useEffect(() => {
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1`, {
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
  console.log(json)
})

}, [])

useEffect(() => {
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random`, {
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
  console.log(json)
})

}, [])
// fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1`, {
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



  return (
    <div className="App">
      <header className="App-header">
      <h1>Food Finder</h1>

      <BrowserRouter>
      <Routes>
        <Route path="/food" element={<FoodContainer></FoodContainer>}></Route>
         {/* <Route path="/" element={}></Route> */}
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
