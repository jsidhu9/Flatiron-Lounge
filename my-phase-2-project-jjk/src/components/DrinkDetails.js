import React from 'react'

function DrinkDetails({drink}) {

// Changing from mapped over list to strings for form functionality
const drinkIngredients = 
    drink.strIngredients.map((ingredient) => (
        <li>{ingredient}</li>))

const drinkMeasurements = 
        drink.strMeasure.map((ingredient) => (
            <li>{ingredient}</li>
        ))

return (
    <div>
        <div>
            <h3>Category : </h3>
                <p>{drink.strCategory}</p>
        </div>
        
        <div>
            <h3>Glass: </h3>
                <p>{drink.strGlass}</p>
        </div>
        
        <div>
        <h3>Ingredients</h3>
            {/* <p>{drink.strIngredients}</p> */}
            {drinkIngredients}
        <h3>Measurements</h3>
            {/* <p>{drink.Measure}</p> */}
            {drinkMeasurements}
        </div>
        <div>
            <h3>Instructions</h3>
            <p>{drink.strInstructions}</p>
        </div>
    </div>
  )
}

export default DrinkDetails