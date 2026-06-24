import React from "react";

function SearchForm() {

   function handleSubmit(e) {
    e.preventDefault()
    fetch("")
   }

    return (
        <div className="searchform">
           <form onSubmit={handleSubmit(e)}>
            <input type="text"></input>
            <input type="submit"></input>
           </form>
        </div>
    )
}

export default SearchForm