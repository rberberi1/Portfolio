

function Header(){
  return(
    <header>
    <span><img width="48" height="48" src="https://img.icons8.com/color/48/laptop--v1.png" alt="laptop--v1"/></span>
    <nav class="nav">
      <ul id="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#events">My Events</a></li>
      </ul>
      <div class="hamburger" id="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
  );
}

export default Header;