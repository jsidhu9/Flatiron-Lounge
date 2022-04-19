import React from 'react'
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";


function Header() {


  return (
    <>
    <h1
     id= "header"
    >DrinkLounge</h1>

      <NavLink exact to='/' >
      Drink List
      </NavLink>
      <NavLink to='/add drink form'>

      </NavLink>

    </>
    // SearchBar, Category Dropdown, Ingredient DropDown, addDrinkForm
  )
}

export default Header