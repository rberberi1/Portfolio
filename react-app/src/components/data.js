import snake from './snake.png'
import computer from './computer.jpg'
import music from './music.jpg'
import sudoku from './sudoku.jpg'
import car from './car.jpg'
import weather from './weather.png'


const projects = [
  {
    title: "Snake Game",
    category: "web",
    image: {
      src: snake,
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Management System",
    category: "web",
    image: {
      src: computer,
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Music App",
    category: "design",
    image: {
      src: music,
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Sudoku Game",
    category: "web",
    image: {
      src: sudoku,
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Car Parking System",
    category: "web",
    image: {
      src: car,
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  },
  {
    title: "Weather App",
    category: "web",
    image: {
      src: weather,
      alt: "flipboard",
      
    },
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae aut eligendi dolorem quod nostrum recusandae, voluptatum alias, ipsum et dolores perspiciatis pariatur quo repellat nobis quae ea! Soluta, provident totam?",
    link: "#",
    linkText: "Live Demo"
  }
];

const filterButtons=[
  {
    type:'all',
    name:'All'
  },

  {
    type:'web',
    name: 'Web Development'
  },

  {
    type:'design',
    name:'Design'
  }

];



const headerLabels=[
  {
    link:'#home',
    name:'Home',
  },
  {
    link:'#about',
    name:'About',
  },
  {
    link:'#projects',
    name:'Projects',
  },
  {
    link:'#skills',
    name:'Skills',
  },
  {
    link:'#contact',
    name:'Contact',
  },
  {
    link:'#events',
    name:'My Events',
  },
];


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


const events = [
  { id: 1, title: "React Workshop", date: "2024-10-10", description: "Learn React.js basics" },
  { id: 2, title: "Node.js Meetup", date: "2024-10-15", description: "A meetup for Node.js enthusiasts" }
];



export {projects, filterButtons, headerLabels, skills, events};