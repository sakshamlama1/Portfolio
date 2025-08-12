import { useState } from "react";
import { 
  Header, Hero, AboutMeSection, SkillsSection, ProjectsSection, ContactSection, Footer
} from '../../components';
import ProjectModal from '../../components/Projects/ProjectModal';

function LandingPage() {
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
    </>
  );
}

export default LandingPage;
