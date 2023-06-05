import React from 'react';

function HomeContent({ isDarkMode }) {
  const textColor = isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color';

  return (
    <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${textColor}`}>
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-capture-waves text-6xl mb-5 sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl">
          Hi, I'm <br/>
          <span className="whitespace-nowrap">Jordan Aston.</span>
        </h1>
        <div className="">
          <p className="font-roboto-mono font-light text-md md:text-lg lg:text-xl">
            I'm a developer from Brisbane, Australia with the goal of creating a seamless UX with every project.<br/><br/>
            Inspired by simplicity and purpose, I believe in expression through experimentation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;























