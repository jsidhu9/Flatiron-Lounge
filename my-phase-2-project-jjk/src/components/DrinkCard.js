import React,{ useState } from 'react'
import DrinkDetails from './DrinkDetails'
import './DrinkCard.css';

function DrinkCard({drink}) {
const [showDetails, setShowDetails] = useState(false)

const handleDetailsClick = () => {
    setShowDetails((prev) => !prev)
}



  return (
  <div>
    <div className="ui column">
    
    <div
        id="ui-card"
        key={drink.idDrink}
        name='name'>
        <div className="content">
            <div className="header" >
                <h3 stlye={{ color: 'red' }}>Name: {drink.strDrink}</h3>
            </div>
            </div>
            <div className="instrcutions-button">
                {showDetails ? <DrinkDetails drink={drink} /> : null}
                <button 
                onClick={handleDetailsClick}>
                {showDetails ? "Back To List" : "Make This Drink!"}
                </button>
                <button
                    className="ui-button"
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