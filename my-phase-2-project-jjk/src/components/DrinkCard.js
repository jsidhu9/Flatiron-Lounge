import React,{ useState } from 'react'
import DrinkDetails from './DrinkDetails'
import './DrinkCard.css';

function DrinkCard({drink}) {
const [showDetails, setShowDetails] = useState(false)

const handleDetailsClick = (e) => {
    e.stopPropagation()
    setShowDetails((prev) => !prev)
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