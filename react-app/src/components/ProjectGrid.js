import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects, filterButtons } from './data';
import FilterButton from "./FilterButton";
import Modal from "./Modal"; 

function ProjectGrid() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 


  const handleFilterClick = (filterType) => {
    setSelectedFilter(filterType);
  };

  
  const filteredProjects = 
    selectedFilter === 'All' ? projects : projects.filter(project => project.category === selectedFilter);
    
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null); 
  };

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="filter-buttons">
        {filterButtons.map((btn) => (
          <FilterButton
            key={btn.name}
            type={btn.type}
            name={btn.name}
            onClick={() => handleFilterClick(btn.type)} 
          />
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            category={project.category}
            image={project.image.src}
            description={project.description}
            link={project.link}
            linkText={project.linkText}
            onClick={() => openModal(project)} 
          />
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}

export default ProjectGrid;
