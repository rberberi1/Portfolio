const projects = [
  {
    title: "Project 1",
    category: "web",
    image: {
      src: "https://img.icons8.com/ios/50/flipboard.png",
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Project 2",
    category: "web",
    image: {
      src: "https://img.icons8.com/ios/50/flipboard.png",
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Project 3",
    category: "design",
    image: {
      src: "https://img.icons8.com/ios/50/flipboard.png",
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Project 4",
    category: "web",
    image: {
      src: "https://img.icons8.com/ios/50/flipboard.png",
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Project 5",
    category: "web",
    image: {
      src: "https://img.icons8.com/ios/50/flipboard.png",
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Project 6",
    category: "web",
    image: {
      src: "https://img.icons8.com/ios/50/flipboard.png",
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  }
];


function ProjectCard(){
  
  
  return(
    <div class="projects-grid">

     {projects.map((project) => (
        <div class="project-card { project.category }" >
        <h3>{project.title}</h3>
        <img width="50" height="50" src={project.image.src} alt="flipboard"/>
        <p>{project.description}</p>
        <a href={project.link}>{project.linkText}</a>
      </div>
     ))}
      
    </div>
  );
}

export default ProjectCard;