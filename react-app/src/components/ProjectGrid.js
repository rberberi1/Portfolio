import ProjectCard from "./ProjectCard";

function ProjectGrid(){
  return(
    <section id="projects" class="projects">
    <h2>My Projects</h2>

    <div class="filter-buttons">
      <button data-category="all">All</button>
      <button data-category="web">Web Development</button>
      <button data-category="design">Design</button>
    </div>
    <ProjectCard></ProjectCard>
    </section>
  );
}

export default ProjectGrid;