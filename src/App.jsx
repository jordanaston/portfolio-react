import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Info from './pages/Info';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [buttonTextColor, setButtonTextColor] = useState('text-dark-mode-color');
  const [borderColor, setBorderColor] = useState('border-dark-mode-color');

  const handleLightMode = () => {
    setIsDarkMode(false);
    setButtonTextColor('text-light-mode-color');
    setBorderColor('border-light-mode-color');
  };

  const handleDarkMode = () => {
    setIsDarkMode(true);
    setButtonTextColor('text-dark-mode-color');
    setBorderColor('border-dark-mode-color');
  };

  return (
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-dark-mode-bg' : 'bg-light-mode-bg'}`}>
      <div className={`absolute border ${borderColor} m-2 sm:m-4 lg:m-6 inset-0`}>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
          <Route path="/info" element={<Info isDarkMode={isDarkMode} />} />
        </Routes> 
        <div className="fixed text-lg sm:bottom-7 sm:left-10 md:bottom-7 md:left-10 lg:bottom-9 lg:left-12 font-roboto-mono bottom-5 left-7 z-40">
          <button
            className={`lg:text-xl mr-5 ${buttonTextColor} transition-transform hover:scale-110`}
            onClick={handleLightMode}
          >
            {isDarkMode ? '□' : '■'} light
          </button>
          <button
            className={`lg:text-xl ${buttonTextColor} transition-transform hover:scale-110`}
            onClick={handleDarkMode}
          >
            {isDarkMode ? '■' : '□'} dark
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


























