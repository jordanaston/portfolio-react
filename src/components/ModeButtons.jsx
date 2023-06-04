import React from 'react'

function ModeButtons() {
  return (
    <div className="text-dark-mode-text">
      <ul className="flex flex-col font-roboto-mono pl-1 md:flex-row md:space-x-4 lg:space-x-6 sm:pb-2 sm:pl-2 lg:pl-6 lg:pb-5">
        <li className="lg:text-xl">□ light</li>
        <li className="lg:text-xl">■ dark</li>
      </ul>
    </div>
  )
}

export default ModeButtons
