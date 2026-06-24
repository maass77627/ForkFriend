import React from "react";
import { useState } from "react";

function FoodForm({onSearch}) {
    const [query, setQuery] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onSearch(query)

    }


    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter Ingredients"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default FoodForm