import React from 'react'
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import image1 from '../assets/apna.png'

export const Navbar = () => {
  return (
    // Navigation menu
    <nav className='flex items-center justify-between p-2'>
       <img src={image1} alt='img1' className='ml-2 px-4'/>
       <div className='hidden md:flex space-x-12 mr-2 px-4 items-center'>
          <li className='list-none  text-black hover:text-bola hover:underline  underline-offset-8 cursor-pointer'><Link to='/'>Home</Link></li>
          <li className='list-none  text-black hover:text-bola hover:underline underline-offset-8 cursor-pointer' ><Link to='/about'>About</Link></li>
          <li className='list-none  text-black hover:text-bola hover:underline underline-offset-8 cursor-pointer'><Link to='/services'>Services</Link></li>
          <li className='list-none  text-black hover:text-bola hover:underline underline-offset-8 cursor-pointer'><Link to='/ui'>UI/UX Design</Link></li>
          <li className='list-none  text-black hover:text-bola hover:underline underline-offset-8 cursor-pointer'><Link to='/contact'>Contact</Link></li>
          <li className='list-none  text-black hover:text-bola hover:underline underline-offset-8 cursor-pointer'><Link to='/register'>Register</Link></li>
          <li className='list-none  text-black hover:text-bola hover:underline underline-offset-8 cursor-pointer'><Link to='/login'>Login</Link></li>
       </div>
       <button className='md:hidden flex mr-2 px-4'>< FaBars className='text-bola text-2xl'/></button>
 </nav>
  )
}
