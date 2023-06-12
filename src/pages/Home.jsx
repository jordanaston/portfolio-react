import React from 'react';
import CodeSymbol from '../components/CodeSymbol';
import MobileMenu from '../components/MobileMenu';
import HomeContent from '../components/HomeContent';
import ProLinks from '../components/ProLinks';
import TopNavBar from '../components/TopNavBar';
import PreScreen from '../components/PreScreen';

function Home({ isDarkMode }) {
  return (
    <div>
      <div>
        <PreScreen />
      </div>
      <div className="fixed top-2 left-2 right-3 flex justify-between items-start z-10">
        <CodeSymbol isDarkMode={isDarkMode} />
        <div className="md:hidden z-50">
          <MobileMenu isDarkMode={isDarkMode} />
        </div>
        <div className="hidden md:flex">
          <TopNavBar isDarkMode={isDarkMode} />
        </div>
        <HomeContent isDarkMode={isDarkMode} />
        <div className="fixed bottom-5 right-5 text-right text-lg">
          <ProLinks isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default Home;




