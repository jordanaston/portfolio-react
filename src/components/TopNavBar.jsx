import React from 'react';

function TopNavBar() {
  return (
    <div className="text-dark-mode-text text-xl md:mt-5 md:mr-5 lg:mr-9 lg:mt-7 lg:text-2xl lg:font-light">
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Projects</li>
        <li>Info</li>
      </ul>
    </div>
  );
}

export default TopNavBar;
