import ProjectCard from "./ProjectCard";
import {projects, filterButtons} from './data';
import  FilterButton  from "./FilterButton";

function ProjectGrid(){
  return(
    <section id="projects" class="projects">
    <h2>My Projects</h2>

    <div class="filter-buttons">
      {filterButtons.map((btn)=> (
        <FilterButton 
        key={btn.name}
        type={btn.type} 
        name={btn.name}>
        </FilterButton>
      ))}
    </div>
    <div class="projects-grid">
    {projects.map((project) => (
      <ProjectCard 
      key={project.title}
      title={project.title} 
      category={project.category}
      image={project.image.src} 
      description= {project.description}
      link= {project.link}
      linkText={project.linkText}>
        </ProjectCard>
    ))}
    </div>
    
    </section>
  );
}

export default ProjectGrid;