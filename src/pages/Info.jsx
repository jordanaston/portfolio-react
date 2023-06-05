import React from 'react'
import CodeSymbol from '../components/CodeSymbol'
import MobileMenu from '../components/MobileMenu'
import TopNavBar from '../components/TopNavBar'
import ModeButtons from '../components/ModeButtons'
import ProLinks from '../components/ProLinks'

function Info() {
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
        <div className="fixed bottom-5 left-6 text-lg">
          <ModeButtons />
        </div>
        <div className="fixed bottom-5 right-5 text-right text-lg">
          <ProLinks />
        </div>
      </div>
    </div>
  )
}

export default Info