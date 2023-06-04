import React from 'react'
import MobileMenuDark from '../assets/mobile-menu-dark.png'

function MobileMenu() {
  return (
    <div>
      <img src={MobileMenuDark} alt="Mobile Menu Image" className="w-16 pt-1 sm:pt-3 sm:mr-3" />
    </div>
  )
}

export default MobileMenu