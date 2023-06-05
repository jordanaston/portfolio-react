import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenuDark from '../assets/mobile-menu-dark.png';
import MobileMenuLight from '../assets/mobile-menu-light.png';

function MobileMenu({isDarkMode}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const linkStyles = {
    fontSize: '2rem',
    transition: 'font-size 0.3s',
  };

  const linkHoverStyles = {
    fontSize: '3rem',
  };

  return (
    <div className="relative">
      <button onClick={handleClick}>
        <img src={isDarkMode ? MobileMenuDark : MobileMenuLight} alt="Mobile Menu Image" className="w-16 pt-1 sm:pt-3 sm:mr-3" />
      </button>
      <div
        className={`fixed inset-0 flex items-center justify-start z-50 transition-transform duration-300 ${
        isDarkMode ? 'bg-light-mode-color' : 'bg-dark-mode-color'
        } ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="absolute top-0 right-0 h-full p-4 flex flex-col items-end">
          <button onClick={handleClick} className={`text-4xl ${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'}`}>
            X
          </button>
        </div>
        <ul className="flex flex-col items-start ml-4 font-roboto-mono justify-center h-full space-y-10">
          <li>
            <Link
              to="/"
              onClick={handleClick}
              className={`block text-5xl font-light ml-2 ${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'}`}
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
              className={`block text-5xl font-light ml-2 ${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'}`}
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
              className={`block text-5xl font-light ml-2 ${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'}`}
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























