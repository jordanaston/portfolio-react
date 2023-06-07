import React from 'react';

function ProjectTile({ projectDescription, projectDetails, techStack, isDarkMode }) {
  let textColor = isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color';
  let borderColor = isDarkMode ? 'border-dark-mode-color' : 'border-light-mode-color';

  return (
    <div>
      <div className={`flex project-tile m-4 w-80 h-60 bg-none border-2 items-center justify-center font-roboto font-light ${borderColor} relative`}>
          <p className={textColor}>Project</p>
      </div>
      <div className="font-roboto font-light">
            <p className={`m-5 ${textColor}`}>{projectDetails}</p>
            <p className={`m-5 ${textColor} text-xl`}>{projectDescription}</p>
            <p className={`m-5 ${textColor} text-md`}>{techStack}</p>
      </div>
    </div>
  );
}

export default ProjectTile;










