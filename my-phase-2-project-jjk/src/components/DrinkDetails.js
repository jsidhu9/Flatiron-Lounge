import React,{useState} from 'react'

function DrinkDetails({drink}) {



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
        <h3>Ingredients/Measure</h3>
            <p>
            <li>{drink.strIngredient1}  {drink.strMeasure1}</li>
            <li>{drink.strIngredient2}  {drink.strMeasure2}</li>
            <li>{drink.strIngredient3}  {drink.strMeasure3}</li>
            <li>{drink.strIngredient4}  {drink.strMeasure4}</li>
            <li>{drink.strIngredient5}  {drink.strMeasure5}</li>
            <li>{drink.strIngredient6}  {drink.strMeasure6}</li>
            </p>
        </div>
        <div>
            <h3>Instructions</h3>
            <p>{drink.strInstructions}</p>
        </div>
    </div>
  )
}

export default DrinkDetails