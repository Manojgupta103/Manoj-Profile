// import React from 'react'
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>
        <div className="mobile-menu-container">
          <img className="logo" src="src\assets\images\logo.png" alt="logo" />
          <ul>
            <li>
              <a className="menu-items">Home</a>
            </li>

            <li>
              <a className="menu-items">Skills</a>
            </li>

            <li>
            <a className='menu-items'>Projects</a>
          </li>

            <li>
              <a className="menu-items">Work Experience</a>
            </li>

            <li>
              <a className="menu-items">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>Hire Me</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
