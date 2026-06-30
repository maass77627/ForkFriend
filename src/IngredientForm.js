
import { useState } from "react";

function IngredientForm() {
const [name, setName] = useState()
const [date, setDate] = useState()
const [category, setCategory] = useState()
const [image, setImage] = useState()

function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3000/ingredients`)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
    })

}



    return (
        <form className="ingredient-form" onSubmit={handleSubmit}>
            <label>Name:</label>
           <input onChange={(e) => setName(e.target.value)} value={name} type="text"></input>
           <label>Date:</label>
           <input onChange={(e) => setDate(e.target.value)} value={date} type="text"></input>
           <label>Category:</label>
           <input onChange={(e) => setCategory(e.target.value)} value={category} type="text"></input>
           <label>Image:</label>
           <input onChange={(e) => setImage(e.target.value)} value={image} type="text"></input>
           <input  value="submit" type="submit"></input>
        </form>

    )
}

export default IngredientForm