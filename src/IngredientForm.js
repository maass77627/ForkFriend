
import { useState } from "react";
import { OffcanvasTitle } from "react-bootstrap";

function IngredientForm({ingredients, setIngredients}) {
const [name, setName] = useState()
// const [date, setDate] = useState()
const [category, setCategory] = useState()
const [image, setImage] = useState()


function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/ingredients`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            category: category,
            image: image
        })
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setIngredients( (prev) => [...prev, json])
    })

}



    return (
        <div className="form-wrap">
        <form className="ingredient-form" onSubmit={handleSubmit}>
            <label>Name:</label>
           <input onChange={(e) => setName(e.target.value)} value={name} type="text"></input>
           <label>Category:</label>
           <input onChange={(e) => setCategory(e.target.value)} value={category} type="text"></input>
           <label>Image:</label>
           <input onChange={(e) => setImage(e.target.value)} value={image} type="text"></input>
           <input  value="submit" type="submit"></input>
        </form>
        </div>

    )
}

export default IngredientForm