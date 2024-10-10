

function ProjectCard(props){
  
  
  return(
  
      <div class="project-card {props.category }" >
        <h3>{props.title}</h3>
        <img width="50" height="50" src={props.image} alt="flipboard"/>
        <p>{props.description}</p>
        <a href={props.link}>{props.linkText}</a>
      </div>
  );
}

export default ProjectCard;