import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <>
    <h1 id= "header">Flatiron Lounge</h1>
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
  )
}

export default Header