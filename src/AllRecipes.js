import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";

function AllRecipes({randomRecipes}) {
console.log(randomRecipes)

const popover = (
    <Popover className="random-pop">
        <Popover.Header as="h6">
          Recipe Details
        </Popover.Header>
       <Popover.Body>
        

       </Popover.Body>
     </Popover>

)


    return (
        <OverlayTrigger trigger="hover" placement="right" overlay={popover} >
        <div className="all-recipes">
            <h4>All Recipes</h4>
           {randomRecipes ? randomRecipes.map((rec) => (
            <div className="random">
            <p>{rec.title}</p>
            <img src={rec.image} alt={rec.name}></img>
            </div>
           )) : null }
        </div>
        </OverlayTrigger>

    )
}

export default AllRecipes