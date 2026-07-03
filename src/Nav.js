import {Link} from "react-router-dom"
import React from "react";

function Nav() {



    return (
        <nav className="nav">
            
            <Link className="link" to="/addingredient">add ingredient</Link>
            <Link className="link" to="/">home</Link>
            <Link className="link" to="/recipes">all recipes</Link>
            

        </nav>

    )
}

export default React.memo(Nav)