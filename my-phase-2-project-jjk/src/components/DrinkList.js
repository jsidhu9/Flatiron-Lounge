import React from 'react'
import DrinkCard from './DrinkCard'

function DrinkList({drinks}) {

const renderDrinks = () => {
    return drinks.map((drink) => {
        return <DrinkCard drink={drink}/>
    })
}

  return (
    <div>
        <h2>DrinkList</h2>
        {renderDrinks()}
    </div>
  )
}

export default DrinkList