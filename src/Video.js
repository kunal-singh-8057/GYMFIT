import React from 'react'
import video from './Assets4/video.png'
import circle from './Assets4/circle.png'
import  triangle from './Assets4/triangle.png'
import './Video.css'

const Video = () => {
  return (
   <>
   <div className='back5'>
   <img src={video} className='video'></img>
   <div className='disk'>
   <img src={circle} className='circle'></img>
   <img src={triangle} className='tri'></img>
   </div>
   </div>
   </>
  )
}

export default Video
