import React from 'react'
import { NavLink } from "react-router-dom";
import AddDrinkForm from './AddDrinkForm'
import About from './About'

function Header() {



  return (
    <>
    <h1 id= "header">DrinkLounge</h1>
    <div>
      <h3>
      <NavLink id= 'drink-link' to='/' exact>
        Drinks List
      </NavLink></h3>
      <h4>
      <NavLink id= 'add-link'  to='/add drink form'>
        Add Your Own Concoction 
      </NavLink></h4>
      <h5>
      <NavLink id= 'about-link'  to='/about'>
        About
      </NavLink></h5>
  </div>
    </>
    // SearchBar, Category Dropdown, Ingredient DropDown, addDrinkForm
  )
}

export default Header