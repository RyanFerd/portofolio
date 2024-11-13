import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">Ryan Ferdiansyah</h1>
        
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#bout" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;