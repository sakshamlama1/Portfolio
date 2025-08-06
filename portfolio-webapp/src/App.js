import './App.css';
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { 
  Header, Hero, AboutMeSection, SkillsSection, ProjectsSection, ContactSection, Footer
} from './components';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Hero />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar
          toastClassName="bg-indigo-600 text-white font-semibold rounded-lg shadow-lg"
          bodyClassName="px-4 py-2"
          progressClassName="bg-indigo-300"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
