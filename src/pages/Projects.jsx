import React from 'react';
import CodeSymbol from '../components/CodeSymbol';
import MobileMenu from '../components/MobileMenu';
import TopNavBar from '../components/TopNavBar';
import ProLinks from '../components/ProLinks';
import ProjectTile from '../components/ProjectTile';
import PlantAppImage from '../assets/plantapp-image.png';
import VinylDataImage from '../assets/vinyl-data-image.png';


function Projects({ isDarkMode }) {
  const projectItems = [
    {
      details: '2023 / Coder Academy',
      description: 'Full Stack Application',
      stack: 'MERN Stack | Tailwind',
      image: ''
    },
    {
      details: '2023 / Personal Project',
      description: 'Music Player App',
      stack: 'Javascript | React | Tailwind',
      image: ''
    },
    {
      details: '2023 / Coder Academy',
      description: 'Vinyl Data API - API Webserver',
      stack: 'Python | Flask | PostgreSQL',
      image: VinylDataImage,
    },
    {
      details: '2022 / Coder Academy',
      description: 'PlantApp - Terminal Application',
      stack: 'Python',
      image: PlantAppImage,
    },
    // {
    //   details: '2023 / Coder Academy',
    //   description: 'Moonswell - Hackathon App',
    //   stack: 'Javascript | React | Tailwind',
    //   image: '',
    // },
  ];

  let textColor = isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color';

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
          <h1 className={`text-center text-xl font-roboto-mono font-light my-5 ${textColor}`}>Recent Work</h1>
          <div className="flex flex-wrap justify-center items-center">
            {projectItems.map((project, index) => (
              <ProjectTile
                key={index}
                isDarkMode={isDarkMode}
                projectDetails={project.details}
                projectDescription={project.description}
                techStack={project.stack}
                projectImage={project.image}
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


























