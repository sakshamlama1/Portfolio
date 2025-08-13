import { useEffect, useState } from "react";
import {
  Header, Hero, AboutMeSection, SkillsSection, ProjectsSection, ContactSection, Footer
} from '../../components';
import ProjectModal from '../../components/Projects/ProjectModal';

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <Header isModalOpen={isModalOpen} />
      <Hero />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection onSelectProject={handleOpenModal} />
      <ContactSection />
      <Footer />

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
