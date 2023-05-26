import React from 'react'
import Home from './component/Home.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Footer from './Footer/Footer.jsx'
import About from './component/About.jsx'
import Services from './component/Services.jsx'
import Ui from './component/Ui.jsx'
import Contact from './component/Contact.jsx'
import Register from './component/Register.jsx'
import Login from './component/Login.jsx'
import Navbar from './Navbar/Navbar.jsx' 

const App = () => {
  return (
    <header>
     <BrowserRouter>
     
     <Navbar/>
       <div className="pages">
         <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/ui" element={<Ui/> } />
            <Route path="/contact" element={<Contact/> } />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
         </Routes>
       </div>
      <Footer/>
     </BrowserRouter>
    </header>
  )
}

export default App