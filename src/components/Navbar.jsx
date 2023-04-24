import React from 'react'
import logo from '/public/airbnb 1.png'

import Hero from './Hero'

const Navbar = () => {
  return (
    <div>
      <header className='w-full shadow-lg'>
        <nav className='p-5'>
            <label><img src={logo}/></label>
        </nav>
      </header>

     <Hero/>
    </div>
  )
}

export default Navbar
