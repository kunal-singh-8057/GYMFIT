import React from 'react'
import bf from './Assets4/bf.png'
import slink from './Assets4/img22.png'
import './Footer.css'

const Footer = () => {
  return (
   <>
    <div className='back6'>
<h1 className='fh'>SPYRO</h1>
<p className='fpara'>
Join us today and experience the transformative power of our fitness classes. Don't wait to start
 your fitness journey. Take the first step towards a healthier, stronger you. Let's sweat, have fun, and
make fitness a way of life together!
</p>
<img src={slink} className='s'></img>
<div className='line'></div>
<p className='copy'> © SPYRO 2023. All rights reserved.</p>
</div>
   </>
  )
}

export default Footer
