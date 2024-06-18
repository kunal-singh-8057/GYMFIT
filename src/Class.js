import React from 'react'
import yoga from './Assets4/img7.png'
import pe from './Assets4/icon.png'
import hr from './Assets4/hr.png'
import ler from './Assets4/img27.png'
import imgl from './Assets4/img8.png'
import imgs from './Assets4/img10.png'
import './Class.css'

const Class = () => {
  return (
  <>
    <div className='back7'>
    <h1 className='co'>Classes</h1>

    <div className='coll'>
    <div className='cset'>
    <div className='co1'>
    <img src={yoga} className='yo'></img>
    <h3 className='hy'>. Yoga</h3>
    <h3 className='stu'>29 students</h3>
    <img src={pe} className='pe'></img>
    <h1 className='sh'>Strength & Sweat</h1>
    <img src={hr} className='hr'></img>
    <h4 className='two'>2HR</h4>
    <h5 className='ins'>Instructor : Esther Howard</h5>
    <p className='cpara'>
    . No. of Classes : 30
      <br></br>
    . Difficulty : Begginers
    </p>
    <img src={ler} className='ler'></img>
    </div>


    <div className='cset2'>
    <div className='co1'>
    <img src={imgl} className='yo'></img>
    <h3 className='hy'>. Fitness</h3>
    <h3 className='stu'>34 students</h3>
    <img src={pe} className='pe'></img>
    <h1 className='sh'>Total Body Burnout</h1>
    <img src={hr} className='hr'></img>
    <h4 className='two'>4HR</h4>
    <h5 className='ins'>Instructor : Wade Warner</h5>
    <p className='cpara'>
    . No. of Classes : 45
      <br></br>
    . Difficulty : Medium
    </p>
    <img src={ler} className='ler'></img>
    </div>


    
    <div className='cset3'>
    <div className='co1'>
    <img src={imgs} className='yo'></img>
    <h3 className='hy'>. Yoga</h3>
    <h3 className='stu'>60 students</h3>
    <img src={pe} className='pe'></img>
    <h1 className='sh'>Bootcamp Challenge</h1>
    <img src={hr} className='hr'></img>
    <h4 className='two'>3HR</h4>
    <h5 className='ins'>Instructor : Robert Fox</h5>
    <p className='cpara'>
    . No. of Classes : 52
      <br></br>
    . Difficulty : Hard
    </p>
    <img src={ler} className='ler'></img>
    </div>
    </div>


    </div>
    </div>

</div>
</div>
  </>
  )
}

export default Class
