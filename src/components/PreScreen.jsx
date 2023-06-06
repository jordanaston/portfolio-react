import React, { useState, useEffect } from 'react';

function PreScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeName, setFadeName] = useState(false);
  const [fadePortfolio, setFadePortfolio] = useState(false);

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
    <div className={`fixed inset-0 flex items-center text-2xl font-roboto font-extralight justify-center h-screen text-dark-mode-color ${loading ? 'bg-light-mode-color' : ''} ${loading ? 'z-50' : ''}`}>
      <div className="flex justify-center"> {/* Added flex and justify-center */}
        {loading && <span className={`transition-opacity duration-500 ${fadeName ? 'opacity-0' : 'opacity-100'} mr-2`}>Jordan Aston | </span>} {/* Added margin-right */}
        {loading && <span className={`transition-opacity duration-500 ${fadePortfolio ? 'opacity-0' : 'opacity-100'}`}>Portfolio</span>}
      </div>
    </div>
  );
}

export default PreScreen;






