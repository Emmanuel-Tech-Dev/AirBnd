import React from 'react'
import heroImage from '/public/Group 77.png'


const Hero = () => {
  return (
    <div>
      
      <div className="content font-new p-5">
        <div className="image py-10">
            <img src={heroImage} />
        </div>
        <div className="text">
            <h1 className='text-3xl font-bold'>Online Experiences</h1>
            <p className='pt-2'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </div>
      </div>


    </div>
  )
}

export default Hero
