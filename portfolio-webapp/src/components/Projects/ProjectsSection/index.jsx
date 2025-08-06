import { useState } from "react";
import SectionTitle from "../../SectionTitle";
import ProjectCard from "../ProjectCard";
import { useTheme } from "../../../context/ThemeContext";
import { motion } from "framer-motion";
import projectData from "../projectData";
import ProjectModal from "../ProjectModal";

const ProjectSection = () => {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projects"
      className={`py-24 px-4 text-center transition-colors duration-300 ${
        darkMode ? "bg-[#0f172a] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <SectionTitle title="Projects" />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-3xl mx-auto mt-4 mb-10 text-xl sm:text-2xl md:text-2xl leading-relaxed tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          These projects reflect my hands-on experience building functional, user-focused solutions using modern technologies.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 mt-12"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectSection;
