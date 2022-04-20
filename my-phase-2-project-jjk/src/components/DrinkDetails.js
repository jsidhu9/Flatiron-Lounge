import React,{useState} from 'react'

function DrinkDetails({drink}) {
    const [showIngredient, setShowIngredient] = useState(false)


    // if the ingredient is null dont render, if it has an ingredient render

    // const [drinkIngredients, setDrinkIngredients] = useState([])
    // const ingredientArray = [
    //     drink.strIngredient1, 
    //     drink.strIngredient2, 
    //     drink.strIngredient3, 
    //     drink.strIngredient4, 
    //     drink.strIngredient5, 
    //     drink.strIngredient6
    // ]
    
    // console.log(ingredientArray)
    

    // const handleDisplayIngredient = (ingredient) => {
    //     if(ingredient === null) {
    //         return setShowIngredient(false)
    //     } else {
    //         console.log(ingredient)
    //     }
    // }

    
// {showIngredient ? <li></li>}

//console.log(drink.strIngredients)
const drinkIngredients = () => {
    drink.strIngredients.map((ingredient) => (ingredient))
    
}
// console.log(drinkIngredients) 

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
            <li>{drinkIngredients()} </li>
            {/* <li>{drink.strIngredient2}  {drink.strMeasure2}</li>
            <li>{drink.strIngredient3}  {drink.strMeasure3}</li>
            <li>{drink.strIngredient4}  {drink.strMeasure4}</li>
            <li>{drink.strIngredient5}  {drink.strMeasure5}</li>
            <li>{drink.strIngredient6}  {drink.strMeasure6}</li> */}
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