

function AllRecipes({recipes}) {



    return (
        <div className="all-recipes">
            <h4>All Recipes</h4>
           {recipes.map((rec) => 
            <div>
            <p>{rec.name}</p>
            <img src={rec.image} alt={rec.name}></img>
            </div>
           )}
        </div>

    )
}

export default AllRecipes