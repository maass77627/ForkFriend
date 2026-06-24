import React from "react";
import Food from "./Food"

function FoodContainer({foods}) {



    return (
        <div className="FoodContainer">
            <h1> Food Container</h1>
            <p>This is the food Container</p>
            {foods.map((food) => <Food food={food}></Food>)}
        </div>

    )
}

export default FoodContainer