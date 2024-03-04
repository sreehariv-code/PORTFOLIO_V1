// import React from 'react'

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen pt-[60px] md:pt-[10rem]" id="projects">
      <h1 className="text-5xl md:text-5xl text-center md:text-left md:pl-5">
        Projects
      </h1>
      <div className="projects pt-16 px-5">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
