import React from 'react'
import './Navbar.css'
import docPic from '../assets/me.png'
import app_logo from '../assets/medVista_logo.png'


const Navbar = () => {
  return (
    <div id='navbar'>
      {/* THis is navbar */}

      <div id="logo">        
        {/* <p><span className='logo-1'>Med</span><span className='logo-2'>Vista</span></p> */}
        <img src={app_logo} alt="" />
      </div>

      <div id="nav_right">

        <div className="left">
          <input type="text" name="" id="search_field" placeholder='Search...' />
        </div>

        <div className="right">

          <div id="nav_icons" className="flex_row">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-moon"></i>
          </div>

          <div id="doc_pic">
            <img src={docPic} alt="Image of Doc" />
            {/* <i className="fa-solid fa-user"></i> */}

            <div className="flex_col">
              <p>Name</p>
              <p>Specialisation</p>
            </div>

          </div>

        </div>

      </div>


      
    </div>
  )
}

export default Navbar
