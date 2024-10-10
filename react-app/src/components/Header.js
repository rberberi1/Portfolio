import { headerLabels } from "./data";
import HeaderLabel from "./HeaderLabel";

function Header(){
  return(
    <header>
    <span><img width="48" height="48" src="https://img.icons8.com/color/48/laptop--v1.png" alt="laptop--v1"/></span>
    <nav class="nav">
      <ul id="nav-menu">
        {headerLabels.map((label) => (
          <HeaderLabel 
          link={label.link} 
          name={label.name}></HeaderLabel>
        ))}
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