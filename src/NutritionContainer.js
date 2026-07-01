import React from "react";


function NutritionContainer({nutrition, setNutrition}) {
 console.log(nutrition)


    return (
        <div className="nutrition-container">

            <h4>Nutrition</h4>
            <div className="nutrition">
                <p>{ nutrition?.nutrients?.[0]?.name}: {nutrition?.nutrients?.[0]?.amount}</p>
                <p>{ nutrition?.nutrients?.[1]?.name}: {nutrition?.nutrients?.[1]?.amount}</p>
                <p>{ nutrition?.nutrients?.[2]?.name}: {nutrition?.nutrients?.[2]?.amount}</p>
                <p>{ nutrition?.nutrients?.[3]?.name}: {nutrition?.nutrients?.[3]?.amount}</p>
                <p>{ nutrition?.nutrients?.[5]?.name}: {nutrition?.nutrients?.[5]?.amount}</p>
                <p>{ nutrition?.nutrients?.[7]?.name}: {nutrition?.nutrients?.[7]?.amount}</p>
                <p>{ nutrition?.nutrients?.[10]?.name}: {nutrition?.nutrients?.[10]?.amount}</p>
            </div>
        </div>

    )
}

export default NutritionContainer