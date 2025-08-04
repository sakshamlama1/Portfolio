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

  function openModal() {
    setModalImageIndex(0);
    setModalOpen(true);
  }

  return (
    <>
      <div
        onClick={openModal}
        className="cursor-pointer bg-white rounded-lg shadow-lg p-6 max-w-[100vw] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto hover:shadow-xl transition-shadow duration-300 flex flex-col"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(); }}
        aria-label={`View more details about ${title} project`}
      >
        <div className="relative h-64 md:h-72 lg:h-80 mb-6 rounded overflow-hidden">
          <img
            src={images[0]}
            alt={`${title} preview`}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        <h3 className="text-indigo-900 font-extrabold text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight">
          {title}
        </h3>

        <p className="text-indigo-800 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
          {description}
        </p>

       <div className="mb-6 text-center">
          <h4 className="text-indigo-800 font-semibold mb-4 text-xl">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-800 text-sm sm:text-base px-4 py-1.5 rounded-full font-semibold select-none border border-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={openModal}
          className="w-full bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          View More
        </button>
      </div>

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
