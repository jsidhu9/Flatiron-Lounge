import React,{ useState } from 'react'
import DrinkDetails from './DrinkDetails'
import './DrinkCard.css';

function DrinkCard({drink, handleRemove}) {
const [showDetails, setShowDetails] = useState(false)

const handleDetailsClick = () => {
    setShowDetails((prev) => !prev)
}

const handleClickRemove = () => {
    handleRemove(drink)
}

return (
<div>
    <div className="ui column">
    
        <div
            id="ui-card"
            key={drink.idDrink}
            name='name'
            onClick={handleDetailsClick}>
            {showDetails ? "" : "Make This Drink!"}
            <img className="drink-thumb" alt={drink.strDrink} src={drink.strDrinkThumb} />
                <div className="content">
                    <div className="header" >
                        <h3  >Name: {drink.strDrink}</h3>
                    </div>
                </div>
                    <div>
                        {showDetails ? <DrinkDetails drink={drink} /> : null}
                            <button                             
                            id='remove-drink'
                            
                                style={{ background: 'black', color: 'chocolate', border: 'black' }}
                                onClick={handleClickRemove}>
                                Remove Drink
                            </button>
                    </div>
                </div>
            </div>
    </div>
    );
}

export default DrinkCard