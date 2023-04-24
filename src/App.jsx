import { useState } from 'react'

import propsData from './propsData'
import './App.css'
import card from '/public/cardImg.png'
// Importing react components
import Navbar from './components/Navbar'
import Card from './components/Card'
import Trial from './components/Trial'

//  img: './cardImg.png',
//         rating: 5.6,
//        reviewCount: 6,
//         country: "USA",
//        title: "Life lessons with Katie Zaferes",
//        price: 135

function App() {

  const data = propsData.map((items) => {
    return (
      <Card
           item ={items} 
            />
    )
    console.log(items)
  })


  return (
    <div className="App">
      <Navbar />
     <section className='scrollbar-medium flex overflow-x-scroll cursor-pointer  scrollbar-thin scrollbar-thumb-rose-500 '>
        {data}
     </section>
    

    </div>
  )
}

export default App
