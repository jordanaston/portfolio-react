import React from 'react'
import CodeSymbol from '../components/CodeSymbol'
import MobileMenu from '../components/MobileMenu'
import TopNavBar from '../components/TopNavBar'
import ProLinks from '../components/ProLinks'

function Projects({ isDarkMode }) {
  return (
    <div>
      <div className="fixed top-2 left-2 right-3 flex justify-between items-start">
        <CodeSymbol isDarkMode={isDarkMode} />
        <div className="md:hidden">
          <MobileMenu isDarkMode={isDarkMode} />
        </div>
        <div className="hidden md:flex">
          <TopNavBar isDarkMode={isDarkMode} />
        </div>
        <div className="fixed bottom-5 right-5 text-right text-lg">
          <ProLinks isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  )
}

export default Projects