import './App.css';
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { 
  Header, Hero, AboutMeSection, SkillsSection, ProjectsSection, ContactSection, Footer
} from './components';
import ProjectModal from './components/Projects/ProjectModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // When a project is selected:
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // When modal is closed:
  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header isModalOpen={isModalOpen} />
        <Hero />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={handleOpenModal} />
        <ContactSection />
        <Footer />

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal}
            isModalOpen={isModalOpen} 
          />
        )}

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
