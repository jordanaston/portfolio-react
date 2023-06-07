import React from 'react';

function ProjectTile({ projectDescription, projectDetails, techStack, projectImage, isDarkMode }) {
  let textColor = isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color';
  let borderColor = (isDarkMode ? 'border-dark-mode-color' : 'border-light-mode-color');

  return (
    <div>
      <div className={`flex project-tile m-4 w-80 h-60 items-center justify-center relative`}>
        {projectImage ? (
          <img src={projectImage} alt="Project Image" />
        ) : (
          <div className={`flex items-center w-80 h-60 border-2 ${borderColor} font-roboto font-regular justify-center ${textColor}`}>
            <p>In Development...</p>
          </div>
        )}
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












