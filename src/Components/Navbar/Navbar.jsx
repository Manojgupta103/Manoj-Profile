/* eslint-disable no-unused-vars */
import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <img className='logo' src="src\assets\images\logo.png" alt='Logo' />
        <ul>
          <li>
            <a className='menu-items'>Home</a>
          </li>
          <li>
            <a className='menu-items'>Skills</a>
          </li>
          <li>
            <a className='menu-items'>Work Experience</a>
          </li>
          <li>
            <a className='menu-items'>Contact Me</a>
          </li>
          <button className='contact-btn' onClick={() =>{} }>Hire Me</button>
        </ul>
        <button className="menu-btn" onClick={() =>{} } >
          <span className={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
            menu
          </span>
        </button>
      </div>
       </nav>
    </>
  )
}
