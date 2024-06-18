import React from 'react'
import img1 from './Assets4/img25.png'
import img2 from './Assets4/img27.png'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className='header'>
    <h1 className='sp'>SYPRO</h1>
    <ul>
      <li>
        <a href='#'>Classes</a>
        <a href='#'>Team</a>
        <a href='#'>AboutUs</a>
        <a href='#'>Gallery</a>
        <img src={img1} className='img1'></img>
      </li>
    </ul>
    <div className='text'>
    <h1 className='un'> Unleash your Inner Athlete</h1>

    <p className='para1'>
    Get ready to sweat it out and achieve your fitness goals with our high-energy fitness classes! Our classes are designed to cater to all fitness levels and provide a fun and motivating environment to help you reach your peak performance.
    </p>
    <img src={img2} className='img2'></img>
    </div>
    </div>
   </>
  )
}

export default Header

