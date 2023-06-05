import React, { useState } from 'react';

function CodeSymbol() {
  const [isHovered, setIsHovered] = useState(false);

  const symbolStyle = {
    color: isHovered ? '#1E1E1E' : '',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
    display: 'inline-block',  // make the element behave as an inline-block
  };

  return (
    <div>
      <p 
        className="text-dark-mode-text font-roboto font-extra-light text-4xl pl-4 pt-3 sm:pl-6 sm:pt-5 lg:pl-9 lg:pt-7" 
        style={symbolStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open('https://github.com/jordanaston', '_blank')}
      >
        &lt; / &gt;
      </p>
    </div>
  )
}

export default CodeSymbol;

