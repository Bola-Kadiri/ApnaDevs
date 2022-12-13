import React from 'react'

import '../App.css'
import {Im500Px} from 'react-icons/im'
import {FaBattleNet} from 'react-icons/fa'
import {FaFreeCodeCamp} from 'react-icons/fa'
import {SiAngellist} from 'react-icons/si'
import image2 from '../assets/image-1.jpg'
import image3 from '../assets/diagram.gif'
import image4 from '../assets/crayons.gif'
import image5 from '../assets/worldwide.gif'

function Home() {
  return (
   <div>
       <div className='radio-content'>
           <div id="element-with-background-image">
               <div id="color-overlay">
                   <div className='radio flex justify-center items-center flex-col'>
                      <h1 className='radio-header md:text-7xl  items-center flex justify-centter mb-8'>Discover Our Proven Formula To Get Success</h1>
                      <p className=' text-xl mb-8 items-center flex justify-centter'>We Are Here To Achieve Your Goal || Your Trusted Technology Partner</p>
                     <button className='hover:bg-pink text-gray-light rounded-full bg-bola px-6 py-2 text-xl border-none outline-none'>Get Started</button>
                   </div>
               </div>
           </div>
           
           <div className='md:flex space-x-4 mr-2 px-4 items-center justify-center card-parent'>
              <div className=' h-48 card flex flex-col justify-around items-center py-4 '>
                  <Im500Px className='text-6xl text-bola'/>
                  <p className='text-2xl card-one'>Creative Ideas</p>
              </div>
              <div className=' h-48 card flex flex-col justify-around items-center py-4'>
                 <FaBattleNet className='text-6xl text-bola'/>
                 <p className='text-2xl card-one'>High Quality</p>
              </div>
              <div className=' h-48 card flex flex-col justify-around items-center py-4'>
                 <FaFreeCodeCamp className='text-6xl text-bola'/>
                 <p className='text-2xl card-one'>Fast Delivery</p>
              </div>
              <div className=' h-48 card flex flex-col justify-around items-center py-4'>
                 <SiAngellist className='text-6xl text-bola'/>
                 <p className='text-2xl card-one'>24/7 support</p>
              </div>
           </div>
       </div>
       <div className='section-two'>
          <img src={image2} className='image-1' alt='image2'/>
          <div className='section-two-right'>
             <h1 className='text-3xl mb-5 text-center top'>ApnaDevs</h1>
             <p className='md:text-5xl para mb-5'>Choose The Best Softwear Company in the City.</p>
             <p className='mb-5 para-1'>ApnaDevs was established with 1 main goal which is developing beautiful projects for you. We’re sure that once your project is developed, it will be easier to achieve your goals and dreams. Turn your dream project into reality. We’re your trusted technology partner. Our relationship with you is based on trust, honesty, cooperation and transparency. </p>
             <p className='last'>View More About Us!</p>
          </div>
       </div>
       <div className='service-section'>
          <div className='inner-service-section my-10'>
             <p className='text-center text-xl mt-12'>Our Featured Services</p>
             <p className='section-header'>We Provide All Exclusive Services For clients</p>
          </div>
          
          <div className='service-section-body'>
            <div className='card-content'>
             <span className='service-section-cards'>
              <img src={image4} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>UI/UX Design</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More!</p>
              </div>
             </span>
             <span className='service-section-cards'>
              <img src={image3} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>SEO & Company</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More!</p>
              </div>
             </span>
             <span className='service-section-cards'>
              <img src={image3} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>Project Plan</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More!</p>
              </div>
             </span>
             <span className='service-section-cards'>
              <img src={image5} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>Web Development</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More</p>
              </div>
             </span>
             <span className='service-section-cards'>
              <img src={image3} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>Cloud Services</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More!</p>
              </div>
             </span>
             <span className='service-section-cards'>
              <img src={image3} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>Hosting Services</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More!</p>
              </div>
             </span>
             <span className='service-section-cards'>
              <img src={image3} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>Mobile App</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More!</p>
              </div>
             </span>
             <span className='service-section-cards'>
              <img src={image3} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>Graphic Design</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More!</p>
              </div>
             </span>
             <span className='service-section-cards'>
              <img src={image3} className='image-2' alt='img3'/>
              <div className='items'>
                 <h2 className='text-bola text-2xl stack mb-2'>All In One Services</h2>
                 <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
                 <p className='text-bola mt-2'>Discover More!</p>
              </div>
             </span>
             
             </div>
          </div>
       </div>
       <div className='portfolio'>
          <div className='inner-portfolio'>
            <
            div className='center'>
            <p className='text-xl text-white mt-8 port'>Our Portfolios</p>
            <p className='text-white recent-work mb-4'>Some Of Our Recent Works</p>
               <div className='inner-portfolio-content px-8'>
                 <p className='bg-blue px-4'>All</p>
                 <p>WEB DESIGN</p>
                 <p> SEO</p>
                 <p>UI/UX DESIGN</p>
                 <p>MOBILE APP</p>
                 <p>GRAPHIC</p>
                 <p>WEB DEVELOPMENT</p>
          </div>
            </div>
            <div className='card-portfolio'>
              <div className='port-card'></div>
              <div className='port-card'></div>
              <div className='port-card'></div>
              <div className='port-card'></div>
              <div className='port-card'></div>
              <div className='port-card'></div>
           </div>
          </div>
          
       </div>
       <div className='service-section'>
       <div className='inner-service-section my-10'>
          <p className='text-center text-xl'>Testimonials</p>
          <p className='section-header'>We Have Many Good Client's Reviews</p>
       </div>
       
       <div className='service-section-body'>
         <div className='card-content'>
          <span className='service-section-cards'>
           <img src={image4} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>UI/UX Design</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More!</p>
           </div>
          </span>
          <span className='service-section-cards'>
           <img src={image3} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>SEO & Company</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More!</p>
           </div>
          </span>
          <span className='service-section-cards'>
           <img src={image3} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>Project Plan</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More!</p>
           </div>
          </span>
          <span className='service-section-cards'>
           <img src={image5} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>Web Development</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More</p>
           </div>
          </span>
          <span className='service-section-cards'>
           <img src={image3} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>Cloud Services</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More!</p>
           </div>
          </span>
          <span className='service-section-cards'>
           <img src={image3} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>Hosting Services</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More!</p>
           </div>
          </span>
          <span className='service-section-cards'>
           <img src={image3} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>Mobile App</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More!</p>
           </div>
          </span>
          <span className='service-section-cards'>
           <img src={image3} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>Graphic Design</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More!</p>
           </div>
          </span>
          <span className='service-section-cards'>
           <img src={image3} className='image-2' alt='img3'/>
           <div className='items'>
              <h2 className='text-bola text-2xl stack mb-2'>All In One Services</h2>
              <p className='description'>We will make design that will be exclusive to your project requirements and needs so your project will be unique and it will look unlike any other project before.</p>
              <p className='text-bola mt-2'>Discover More!</p>
           </div>
          </span>
          
          </div>
       </div>
    </div>
   </div>
  
  )
}

export default Home
