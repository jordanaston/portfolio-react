import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function TopNavBar({ isDarkMode }) {
  const location = useLocation();
  
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const linkStyle = (path) => ({
    display: 'inline-block',
    paddingBottom: '0.3px',
    borderBottom: location.pathname === path ? '2px solid' : 'none',
    color: hoveredLink === path && location.pathname !== path ? (isDarkMode ? '#1E1E1E' : '#A3A3A3') : '',
    transform: hoveredLink === path && location.pathname !== path ? 'scale(1.05)' : 'scale(1)',
    transition: 'color 0.3s ease, transform 0.3s ease',
  });

  return (
    <div className={`text-${isDarkMode ? 'dark' : 'light'}-mode-color text-xl md:mt-5 md:mr-5 lg:mr-9 lg:mt-7 lg:text-xl lg:font-light`}>
      <ul className="flex space-x-6">
        <li>
          <Link 
            to="/" 
            style={linkStyle('/')}
            onMouseEnter={() => setHoveredLink('/')} 
            onMouseLeave={() => setHoveredLink(null)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            style={linkStyle('/projects')}
            onMouseEnter={() => setHoveredLink('/projects')} 
            onMouseLeave={() => setHoveredLink(null)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/info" 
            style={linkStyle('/info')}
            onMouseEnter={() => setHoveredLink('/info')} 
            onMouseLeave={() => setHoveredLink(null)}
          >
            Info
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNavBar;







