import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import { useRef } from "react";
import { useState } from "react";
import Popover from "react-bootstrap/Popover";

function Recipe({rec}) {
console.log(rec)
const apiKey = process.env.SPOON_API_KEY;

// const [liked, setLiked] = useState(false)

console.log(apiKey);
function handleClick(id) {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
    .then((res) => {
        console.log(res.status)
         return res.json()})
    .then((json) => {
        console.log(json)
    })
}

const popover = (
    <Popover id="popover">
        <Popover.Header as="h3">Recipe Details</Popover.Header>
        <Popover.Body>
          {rec.name}
        </Popover.Body>
    </Popover>
);


function handleLike(e, id) {
    console.log(e)
    console.log(id)
     e.stopPropagation(); 
     setLiked((prev) => !prev)


}

    return (
        <OverlayTrigger placement="top" overlay={popover}>
        <div role="button" onClick={() => handleClick(rec.id)} className="recipe">
             <button className="like-btn" aria-label={liked ? "Remove from favorites" : "Add to favorites"} onClick={(e) => handleLike(e, rec.id)}>
              <i aria-hidden="true" className={liked ? "bi bi-heart-fill" : "bi bi-heart"}></i>
            </button>

          
          <h3>{rec.title}</h3>
          <img src={rec.image}></img>
        </div>
        </OverlayTrigger>
    )
}

export default Recipe