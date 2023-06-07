import React from 'react';
import CodeSymbol from '../components/CodeSymbol';
import MobileMenu from '../components/MobileMenu';
import TopNavBar from '../components/TopNavBar';
import ProLinks from '../components/ProLinks';
import ProjectTile from '../components/ProjectTile';

function Projects({ isDarkMode }) {
  const projectText = [
    {
      details: '2023 / Coder Academy',
      description: 'Van Voyage - Campervan Hire',
      stack: 'MERN Stack / Tailwind'
    },
    {
      details: '2023 / Personal Project',
      description: 'Music Player App (In Production)',
      stack: 'Javascript / React / Tailwind'
    },
    {
      details: '2023 / Coder Academy',
      description: 'Vinyl Data API - Postman',
      stack: 'Python / Flask / PostgreSQL'
    },
    {
      details: '2022 / Coder Academy',
      description: 'Terminal Application - PlantApp.',
      stack: 'Python'
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="fixed top-2 left-2 right-3 flex justify-between items-start z-50">
        <CodeSymbol isDarkMode={isDarkMode} />
        <div className="md:hidden">
          <MobileMenu isDarkMode={isDarkMode} />
        </div>
        <div className="hidden md:flex">
          <TopNavBar isDarkMode={isDarkMode} />
        </div>
      </div>
      <div className="flex flex-col items-center overflow-y-auto pt-16 pb-24">
        <div className="container mx-auto h-full max-h-full overflow-y-auto">
          <div className="flex flex-wrap justify-center items-center">
            {projectText.map((project, index) => (
              <ProjectTile
                key={index}
                isDarkMode={isDarkMode}
                projectDetails={project.details}
                projectDescription={project.description}
                techStack={project.stack}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 text-right text-lg z-10">
        <ProLinks isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default Projects;


























