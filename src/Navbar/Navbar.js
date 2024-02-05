import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
  
      <nav className='navbar-outside navbar'>
        <a href='#home'  className="navbar-inside navbar-home">/Home</a>
        <a  href='#about'  className="navbar-inside navbar-about">/About</a>
        <a href="#myWork" className="navbar-inside navbar-software_creation">/software creation</a>
        
    
      </nav>
    
    </div>

    

  )
}

export default Navbar
