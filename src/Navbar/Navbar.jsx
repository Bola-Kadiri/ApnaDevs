import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import image1 from '../assets/tru.png'
import '../Navbar/Navbar.css'
import { items } from '../Menu-Data/menu-data';
export const Navbar = () => {
     const [dropdown, setDropDown] = useState(false)
     const [mobile, setMobile] = useState(false)
     const [open, setOpen] = useState(false)
     const handleClick=()=>{
          setDropDown(!dropdown)
     }
     const onMouseEnter=()=>{
          if(window.innerWidth<960){
               setDropDown(false)
          }else{
               setDropDown(true)
          }
        
     }
     const onMouseLeave=()=>{
          if(window.innerWidth<960){
               setDropDown(false)
          }else{
               setDropDown(false)
          }
         
      }

     const handleMobile=()=>{
          setMobile(!mobile)
     }

      const clickMobile=()=>{
          setOpen(!open)
       
      }
     
    

  const result = items.map((item)=>{
       return(
          <li className='list-none  text-black hover:text-bola hover:underline  underline-offset-8 cursor-pointer'><Link to='/'>Home</Link></li>         
       )
  })
  return (
    // Navigation menu
    
  <nav className=' nav-link flex items-center justify-between p-2'>
       <Link to='/'><img src={image1} alt='img1' className='logo  ml-2 px-4 cursor-pointer'/></Link>   
       <div className={mobile ? "links-show" : "links"}>
            <li className='list-none  text-black hover:text-bola hover:underline  underline-offset-8 cursor-pointer'><Link to='/'>Home</Link></li>
            <li className='list-none  text-black hover:text-bola hover:underline  underline-offset-8 cursor-pointer'><Link to='/about'>About</Link></li>
            <div className='dropdown'>
            <li className='list-one list-none hover:underline  underline-offset-8' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={clickMobile}><p className='serv cursor-pointer'>Services</p>
          
            <div>
            {open && 

               <div className='test-show'> 
                <Link to='/frontend' >Front end</Link>
                <Link to='/backedend'>Back end</Link>
                <Link to='/uiux'>UI/UX</Link>
                <Link to='/mentorship'>Mentorship</Link>
                  </div>}
            
           {dropdown && 

        <div className= "inner-service" > 
         <div className='inner-link'>
         <Link to='/frontend' onClick={handleClick}>Front end</Link>
         <Link to='/backedend' onClick={handleClick}>Back end</Link>
         <Link to='/uiux' onClick={handleClick}>UI/UX</Link>
         <Link to='/mentorship' onClick={handleClick}>Mentorship</Link>
         
         </div>
     
          
           </div>}
          
          </div>
            </li>
           
            </div>
          
            <li className='list-none  text-black hover:text-bola hover:underline  underline-offset-8 cursor-pointer'><Link to='/contact'>Contact</Link></li>
            <li className='list-none  text-black hover:text-bola hover:underline  underline-offset-8 cursor-pointer'><Link to='/register'>Register</Link></li>
       </div>
       <button className='md:hidden flex mr-2 px-4' onClick={handleMobile}>{ mobile ? < FaTimes className='text-bola text-2xl' /> : < FaBars className='text-bola text-2xl' />}</button>
 </nav>
 
  )
}

export default Navbar
