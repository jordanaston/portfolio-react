import React from 'react'
import CodeSymbol from '../components/CodeSymbol'
import MobileMenu from '../components/MobileMenu'
import TopNavBar from '../components/TopNavBar'

function Projects() {
  return (
    <div>
        <div className="fixed top-2 left-2 right-3 flex justify-between items-start">
          <CodeSymbol />
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <div className="hidden md:flex">
            <TopNavBar />
          </div>
        </div>
    </div>
  )
}

export default Projects