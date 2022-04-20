import React from 'react'
import DrinkList from './DrinkList'

function Home({drinks}) {

  return (

    <>
    <div>
    <DrinkList  drinks={drinks}/>
    </div>
   </> 
  )
}

export default Home