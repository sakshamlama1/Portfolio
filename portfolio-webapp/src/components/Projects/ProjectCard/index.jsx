import { useState } from "react";
import ProjectModal from "../ProjectModal";

function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const {
    title,
    description,
    images,
    techStack,
  } = project;

  const openModal = () => {
    setModalImageIndex(0);
    setModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full mx-auto flex flex-col hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        {/* Image Preview */}
        <div className="relative h-64 sm:h-72 lg:h-80 mb-6 rounded-xl overflow-hidden">
          <img
            src={images[0]}
            alt={`${title} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Title */}
        <h3 className="text-indigo-900 font-bold text-xl sm:text-2xl mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-indigo-700 text-sm sm:text-base leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-indigo-100 text-indigo-800 text-xs sm:text-sm px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View More Button */}
        <button
          type="button"
          onClick={openModal}
          className="mt-auto self-center sm:self-start bg-indigo-700 text-white text-sm sm:text-base font-medium px-5 py-2 rounded-md hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
          aria-label={`View more about ${title} project`}
        >
          View More
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <ProjectModal
          project={project}
          onClose={() => setModalOpen(false)}
          currentImage={modalImageIndex}
          setCurrentImage={setModalImageIndex}
        />
      )}
    </>
  );
}

export default ProjectCard;
