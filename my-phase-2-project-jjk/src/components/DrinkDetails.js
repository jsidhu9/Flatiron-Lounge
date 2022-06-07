import React from 'react'

function DrinkDetails({drink}) {

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
            {drinkIngredients}
        <h3>Measurements</h3>
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