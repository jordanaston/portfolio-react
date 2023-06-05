import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenuDark from '../assets/mobile-menu-dark.png';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const linkStyles = {
    fontSize: '3rem',
    transition: 'font-size 0.3s',
  };

  const linkHoverStyles = {
    fontSize: '4rem',
  };

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <img src={MobileMenuDark} alt="Mobile Menu Image" className="w-16 pt-1 sm:pt-3 sm:mr-3" />
      </button>
      <div
        className={`fixed inset-0 flex items-center justify-start z-50 bg-light-mode-text transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute top-0 right-0 h-full p-4 flex flex-col items-end">
          <button onClick={handleClick} className="text-5xl text-dark-mode-text">
            X
          </button>
        </div>
        <ul className="flex flex-col items-start font-roboto-mono justify-center h-full space-y-10">
          <li>
            <Link
              to="/"
              onClick={handleClick}
              className="block text-5xl font-light text-dark-mode-text ml-2"
              style={linkStyles}
              onMouseOver={(e) => {
                e.target.style.fontSize = linkHoverStyles.fontSize;
              }}
              onMouseOut={(e) => {
                e.target.style.fontSize = linkStyles.fontSize;
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={handleClick}
              className="block text-5xl font-light text-dark-mode-text ml-2"
              style={linkStyles}
              onMouseOver={(e) => {
                e.target.style.fontSize = linkHoverStyles.fontSize;
              }}
              onMouseOut={(e) => {
                e.target.style.fontSize = linkStyles.fontSize;
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/info"
              onClick={handleClick}
              className="block text-5xl font-light text-dark-mode-text ml-2"
              style={linkStyles}
              onMouseOver={(e) => {
                e.target.style.fontSize = linkHoverStyles.fontSize;
              }}
              onMouseOut={(e) => {
                e.target.style.fontSize = linkStyles.fontSize;
              }}
            >
              Info
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;





















