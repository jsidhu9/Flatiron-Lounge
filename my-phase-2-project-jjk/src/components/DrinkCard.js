import React,{ useState } from 'react'
import DrinkDetails from './DrinkDetails'
import './DrinkCard.css';

function DrinkCard({drink}) {
const [showDetails, setShowDetails] = useState(false)
const [drinkIngredients, setDrinkIngredients] = useState([])

const handleDetailsClick = () => {
    setShowDetails((prev) => !prev)
    console.log(drink)
}


// const ingredientArray = [
//     drink.strIngredient1, 
//     drink.strIngredient2, 
//     drink.strIngredient3, 
//     drink.strIngredient4, 
//     drink.strIngredient5, 
//     drink.strIngredient6
// ]


// const ingredientDisplay = (bev) => {
//     ingredientArray.map((ingredient) => {
//         if(ingredient === null) {
//             return console.log(ingredient)
//         } else {
//             return setDrinkIngredients([...drinkIngredients,ingredient])
//         }
//     })
// }


  return (
  <div>
    <div className="ui column">
    
        <div
            id="ui-card"
            key={drink.idDrink}
            name='name'
            onClick={handleDetailsClick}>
            {showDetails ? "Back To List" : "Make This Drink!"}
            <img className="drink-thumb" alt={drink.strDrink} src={drink.strDrinkThumb} />
                <div className="content">
                    <div className="header" >
                        <h3 style={{color:"chocolate"}} >Name: {drink.strDrink}</h3>
                    </div>
                </div>
                    <div>
                        {showDetails ? <DrinkDetails drink={drink} /> : null}
                            <button
                          style={{ background: 'black', color: 'chocolate', border: 'chocolate' }}
                                 onClick={null}>
                                Remove Drink
                            </button>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default DrinkCard