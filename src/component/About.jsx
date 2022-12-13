import React from 'react'
import '../component/About.css'

const About = () => {
  return (
    <div className='about'>
       <div className='about-content-image'>
           <div className='about-overlay'>
                 <div className='radio flex justify-center items-center flex-col'>
                 <h1 className='radio-header md:text-7xl  items-center flex justify-centter mb-8'>About US</h1>
                 <p className=' text-xl mb-8 about-center flex justify-centter'>Our relationship with you is based on honesty, cooperation and transparency. With your original ideas combined with our leadership and resources, the possibilities are endless!</p>
                 <button className='hover:bg-pink text-gray-light rounded-full bg-bola px-6 py-2 text-xl border-none outline-none'>Meet Our Team</button>
          </div>
       </div>
       </div>
       <div className='core-value'>
          <div className='core-value-content'>
             <p className='text-6xl '>Our Key Values</p>
             <div className='core-value-card-content'>
                <div className='value-card'></div>
                <div className='value-card'></div>
                <div className='value-card'></div>
                <div className='value-card'></div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default About