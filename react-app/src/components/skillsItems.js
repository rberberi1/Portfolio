const skills = [
  {
    name: "HTML",
    image: {
      src: "https://img.icons8.com/color/48/html-5--v1.png",
      alt: "html-5--v1",
     
    }
  },
  {
    name: "CSS",
    image: {
      src: "https://img.icons8.com/color/48/css3.png",
      alt: "css3",

    }
  },
  {
    name: "JavaScript",
    image: {
      src: "https://img.icons8.com/color/48/javascript--v1.png",
      alt: "javascript--v1",
     
    }
  },
  {
    name: "Java",
    image: {
      src: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
      alt: "java-coffee-cup-logo--v1",
 
    }
  },
  {
    name: "Python",
    image: {
      src: "https://img.icons8.com/color/48/python--v1.png",
      alt: "python--v1",

    }
  },
  {
    name: "React Js",
    image: {
      src: "https://img.icons8.com/office/40/react.png",
      alt: "react",
      
    }
  }
];



function SkillsItems(){
 
  return(
    skills.map((skill) => (
      <div class="skill-item">
        <img width="48" height="48" src={skill.image.src} alt={skill.alt}/>
        <p>{skill.name}</p>
      </div>
    ))
  );
}

export default SkillsItems;