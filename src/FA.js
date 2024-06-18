import React from 'react'
import d1 from './Assets4/do.png'
import img23 from './Assets4/img23.png'
import free from './Assets4/img27.png'
import './F&A.css'

const FA = () => {
  return (
  <>
    <div className='back5'>
    <h1 className='hfq'>Frequently Asked Questions</h1>
    </div>

    <div className='qlist'>
    <h3 className='plus'>+</h3>
    <h3 className='u1'>What are your focus areas as a UI/UX agency?</h3>
    <div className='q1'></div>
    <img src={d1} className='d1'></img>
    <p className='db'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    </p>


   <div className='d2'>
    <h3 className='plus'>+</h3>
    <h3 className='u1'>Why is UI/UX design important for your business growth?</h3>
    <div className='q1'></div>
    </div>
    

    <div className='d3'>
    <h3 className='plus'>+</h3>
    <h3 className='u1'>Can your UX design agency help us with web design?</h3>
    <div className='q1'></div>
    </div>
  
    <div className='d4'>
    <h3 className='plus'>+</h3>
    <h3 className='u1'>How much does a UI/UX design project cost?</h3>
    <div className='q1'></div>

    <img src={img23} className='or'></img>
    <h1 className='orh'>Are you ready to change?</h1>
    <p className='orp'>
    Challenge your strength. Stretch your body. Breathe easy. Our team of world-class instructors will empower
    </p>
    <img src={free} className='free'></img>
    </div>
    </div>

  </>
  )
}

export default FA
