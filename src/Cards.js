import React from 'react'
import stars from './Assets4/img21.png'
import c1 from './Assets4/img18.png'
import c2 from './Assets4/img19.png'
import c3 from './Assets4/img20.png'
import lo from './Assets4/img24.png'
import './Cards.css'

const Cards = () => {
  return (
    <>
        <div className='back4'>
        <h1 className='feed'>Customer Feedbacks</h1>

        <div className='cardsets'>

        <div className='f1'>
        <p className='f1para'>
        Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re
        </p>
        <img src={stars} className='stars'></img>
        <img src={c1} className='c1'></img>
        <h3 className='hc1'>Courtney Henry</h3>
        </div>

        <div className='f1'>
        <p className='f1para'>
        This a great historic site to visit. I rented a little cart and the driver was a really good friendl
        </p>
        <img src={stars} className='stars'></img>
        <img src={c2} className='c1'></img>
        <h3 className='hc1'>Brooklyn Simmon</h3>
        </div>

        <div className='f1'>
        <p className='f1para'>
        I had been to Al Balad several times. It is one of my favorite places in Jeddah. It is historic, ful
        </p>
        <img src={stars} className='stars'></img>
        <img src={c3} className='c1'></img>
        <h3 className='hc1'>Jane Cooper</h3>
        </div>

        </div>

        <img src={lo} className='lo'></img>
        </div>
    </>
  )
}

export default Cards
