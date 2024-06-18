import React from 'react'
import img11  from './Assets4/img11.png'
import img12 from './Assets4/img12.png'
import img13 from './Assets4/img13.png'
import img14 from './Assets4/img14.png'
import bar1 from './Assets4/bar1.png'
import bar2 from './Assets4/bar2.png'
import './Teacher.css'

const Teacher = () => {
  return (
   <>
   <div className='back3'>
  
   <div className='ins'>
    <h1>
        Instructor
    </h1>
   </div>
   <div className='set'>

   <div className='so'>
   <img src={bar1} className='b'></img>
   <br></br>
   <br></br>
   <img src={bar2} className='b2'></img>
   </div>


   <div className='cr1'>
   <img src={img11}></img>
   <h1 className='j'>Jacob Jones</h1>
   <h4 className='g'>Gym trainer</h4>
   </div>

   <div className='cr1'>
   <img src={img12}></img>
   <h1 className='j'>Leslie Alexander</h1>
   <h4 className='g'>Gym trainer</h4>
   </div>

   <div className='cr1'>
   <img src={img13}></img>
   <h1 className='j'>Cameron</h1>
   <h4 className='g'>Gym trainer</h4>
   </div>

   <div className='cr1'>
   <img src={img14}></img>
   <h1 className='j'>Jane Cooper</h1>
   <h4 className='g'>Gym trainer</h4>
   </div>
   
   </div>
   </div>
   </>
  )
}

export default Teacher
