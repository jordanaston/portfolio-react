import React, { useState, useEffect } from 'react';

function PreScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeName, setFadeName] = useState(false);

  useEffect(() => {
    const fadeNameTimer = setTimeout(() => {
      setFadeName(true);
    }, 1800); 

    const fadePortfolioTimer = setTimeout(() => {
      setFadePortfolio(true);
    }, 1950);

    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearTimeout(fadeNameTimer);
      clearTimeout(fadePortfolioTimer);
      clearTimeout(loadingTimer);
    }; 
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center text-2xl font-roboto font-extralight justify-center text-dark-mode-color ${loading ? 'bg-light-mode-color' : ''} ${loading ? 'z-50' : ''}`}>
        {loading && <span className={`transition-opacity duration-500 ${fadeName ? 'opacity-0' : 'opacity-100'}`}>Jordan Aston Portfolio</span>} 
    </div>
  );
}

export default PreScreen;






