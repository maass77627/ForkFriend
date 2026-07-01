import {Link} from "react-router-dom"

function Nav() {



    return (
        <nav className="nav">
            
            <Link className="link" to="/addingredient">add ingredient</Link>
            <Link className="link" to="/">home</Link>
            
            

        </nav>

    )
}

export default Nav