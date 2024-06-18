import React from 'react'
import img23 from './Assets4/orange.png'
import img24 from './Assets4/img15.png'
import img25 from './Assets4/img16.png'
import img26 from './Assets4/img17.png'
import './Promo.css'

const Promo = () => {
  return (
    <>
    <div className='back4'>
        <img src={img23} className='img23'></img>
        <h1 className='down'>
        Download the most loved 
        <br></br>
        fitness app
        </h1>
        <img src={img24} className='img24'></img>

        <p className='parap'>
        Start your fitness journey with us. Join the cult!
        </p>

        <div className='logoset'>
        <img src={img25}></img>
        <img src={img26} className='img26'></img>
        </div>
    </div>
    </>
  )
}

export default Promo
