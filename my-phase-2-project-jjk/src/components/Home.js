import React from 'react'
import Header from './Header'
import DrinkList from './DrinkList'

function Home({drinks}) {

  return (
    <div>
    <Header />
    <DrinkList  drinks={drinks}/>

    </div>
  )
}

export default Home