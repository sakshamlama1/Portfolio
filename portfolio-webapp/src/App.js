import './App.css';
import { 
  Header, Hero, About, Skills, Projects, Contact, Footer
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
