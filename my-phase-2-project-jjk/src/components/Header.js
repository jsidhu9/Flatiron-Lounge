import React from 'react'
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import AddDrinkForm from './AddDrinkForm'
import DrinkList from './DrinkList'


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
        <AddDrinkForm />
      </NavLink>

    </>
    // SearchBar, Category Dropdown, Ingredient DropDown, addDrinkForm
  )
}

export default Header