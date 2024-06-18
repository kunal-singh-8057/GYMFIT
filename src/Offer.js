import React from 'react'
import img3 from './Assets4/img2.png'
import img4 from './Assets4/img3.png'
import img5 from './Assets4/img4.png'
import img6 from './Assets4/img5.png'
import img7 from './Assets4/img6.png'
import img8 from './Assets4/bar1.png'
import img9 from './Assets4/bar2.png'
import './Offer.css'

const Offer = () => {
  return (
    <>
        <div className='back2'>
        <h1 className='woo'>Find What Moves You</h1>
        <div className='imgset'>
        <img src={img3} className='img3'></img>
        <h1 className='g'>GYM</h1>
        <p className='para2'>
        Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.
        </p>

        <img src={img4} className='img4'></img>
        <h1 className='s2'>ZUMBA</h1>

        <img src={img5} className='img5'></img>
        <h1 className='yoga'>YOGA</h1>

        <img src={img6} className='img6'></img>
        <h1 className='m'>Martial Arts</h1>
        </div>

        <div className='3'>
        <h1 className='fit'>Fit For Your Lifestyle</h1>
        <p className='para4'>
        Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow. You’ll find movement for every mood with classes sorted by time, style, and skill level.
        </p>
        <img src={img7} className='img7'></img>
        <div className='bars'>
        <img src={img8} className='img8'></img>
        <img src={img9} className='img9'></img>
        </div>
        </div>
        </div>
    </>
  )
}

export default Offer
