import React, { useState } from 'react';

function ProLinks({ isDarkMode }) {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = (path) => ({
    display: 'inline-block',
    color: hoveredLink === path ? (isDarkMode ? '#1E1E1E' : '#A3A3A3') : '',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: hoveredLink === path ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <nav className={`text-${isDarkMode ? 'dark' : 'light'}-mode-color font-roboto-mono sm:pb-2 sm:pr-2 lg:mr-5 lg:mb-3`}>
      <ul>
        <li className="lg:text-xl lg:mb-2">
          <a 
            href="https://github.com/jordanaston" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={linkStyle('github')}
            onMouseEnter={() => setHoveredLink('github')} 
            onMouseLeave={() => setHoveredLink(null)}
          >
            github ➚
          </a> 
        </li>
        <li className="lg:text-xl">
          <a 
            href="https://www.linkedin.com/in/jordan-aston-164aab178/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={linkStyle('linkedin')}
            onMouseEnter={() => setHoveredLink('linkedin')} 
            onMouseLeave={() => setHoveredLink(null)}
          >
            linkedin ➚
          </a> 
        </li>
      </ul>
    </nav>
  );
}

export default ProLinks;


