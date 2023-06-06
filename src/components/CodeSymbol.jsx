import React, { useState } from 'react';

function CodeSymbol({ isDarkMode }) {
  const [isHovered, setIsHovered] = useState(false);

  const symbolStyle = {
    color: isHovered ? (isDarkMode ? '#1E1E1E' : '#A3A3A3') : '',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
    display: 'inline-block',
  };

  return (
    <div>
      <p
        className={`text-${isDarkMode ? 'dark' : 'light'}-mode-color font-roboto font-extra-light text-4xl pl-4 pt-3 sm:pl-6 sm:pt-5 lg:pl-9 lg:pt-7`}
        style={symbolStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open('https://github.com/jordanaston', '_blank')}
      >
        &lt; / &gt;
      </p>
    </div>
  );
}

export default CodeSymbol;


