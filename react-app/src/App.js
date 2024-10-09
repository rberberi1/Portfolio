import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectGrid from './components/ProjectGrid';
import SkillsGrid from './components/SkillsGrid';
import ContactMe from './components/ContactMe';
import ScrollTopBtn from './components/ScrollTopBtn';
import Footer from './components/Footer';
import EventsList from './components/Events';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <ProjectGrid></ProjectGrid>
      <SkillsGrid></SkillsGrid>
      <ContactMe></ContactMe>
      <ScrollTopBtn></ScrollTopBtn>
      <EventsList></EventsList>
      <Footer></Footer>
    </div>
  );
}

export default App;
