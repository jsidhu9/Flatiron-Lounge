import React from 'react'
import DrinkList from './DrinkList'

function Home({drinks, handleRemove}) {

  return (

    <>
    <div>
    <DrinkList  
      drinks={drinks}
      handleRemove={handleRemove}
      />
    </div>
   </> 
  )
}

export default Home