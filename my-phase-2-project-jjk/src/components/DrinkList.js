import React, {useState} from 'react'
import DrinkCard from './DrinkCard'

function DrinkList({drinks}) {
const [drinkIndex, setDrinkIndex] = useState(0)
const [searchQuery, setSearchQuery] = useState("");
const [filterBy, setFilterBy] = useState("All")

const handleFilterChange = (e) => { 
  setFilterBy(e.target.value)
}

const handleOnChange = (e) => setSearchQuery(e.target.value);

  const searchResults = drinks.filter((drink) => {
    return drink.strDrink.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
const filteredDrinks = searchResults.filter((drink) => {
  if(filterBy === "All") return true

  return drink.strCategory === filterBy})


const drinkComponents = filteredDrinks
    .slice(drinkIndex, drinkIndex + 5)
    .map((drink) => (
        <DrinkCard key={drink.id} drink={drink} />
    ))

const handleClickMore = () => {
    setDrinkIndex((drinkIndex) => (drinkIndex + 5) % drinks.length)
}

  return (
    <div >
        <input id= 'search' type='text' placeholder='Search Drinks' onChange={handleOnChange}/>
          <select id= 'all' onChange={handleFilterChange} value={filterBy}>
            <option value="All">All</option>
            <option value="Ordinary Drink">Ordinary Drink</option>
            <option value="Shot">Shot</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Coffee / Tea">Coffee/Tea</option>
            <option value="Punch / Party Drink">Punch/Party Drink</option>
          </select>
        <div className='belt'>        {drinkComponents}
        <button id= 'more-button' onClick={handleClickMore}>More</button>
        </div>
    </div>
  )
}

export default DrinkList