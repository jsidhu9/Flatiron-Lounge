import React, {useState} from 'react'
import DrinkCard from './DrinkCard'

function DrinkList({drinks}) {
const [drinkIndex, setDrinkIndex] = useState(0)

const drinkComponents = drinks
    .slice(drinkIndex, drinkIndex + 5)
    .map((drink) => (
        <DrinkCard key={drink.id} drink={drink} />
    ))

const handleClickMore = () => {
    setDrinkIndex((drinkIndex) => (drinkIndex + 5) % drinks.length)
}

  return (
    <div >
        {/* <h2 style={{ color: 'chocolate',}}>DrinkList</h2> */}
        <div className='belt'>
        {drinkComponents}
        <button style={{ background: 'black', color: 'chocolate', border: 'chocolate' }} onClick={handleClickMore}>More Drinks!</button>
        </div>
    </div>
  )
}

export default DrinkList