// import React from 'react'

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen pt-[60px]" id="projects">
      <h1 className="md:text-5xl">Projects</h1>
      <div className="projects pt-16 px-5">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
