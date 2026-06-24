import React from "react";


function Food({food}) {
console.log(food)


    return (
        <div className="food">
            <h1>Food </h1>
            <p>{food.name}</p>
            
        </div>
    )
}

export default Food 