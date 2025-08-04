import React, { useEffect, useState, useCallback } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(
    () => setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1)),
    [project.images.length]
  );

  const goToPrev = useCallback(
    () => setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1)),
    [project.images.length]
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, goToNext, goToPrev]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative animate-fade-in-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 text-gray-500 hover:text-indigo-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h3 id="modal-title" className="text-center text-2xl sm:text-3xl font-bold text-indigo-700 mb-6">
          {project.title}
        </h3>

        {/* Image Carousel */}
        <div className="relative mb-6">
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="w-full max-h-[400px] sm:max-h-[480px] object-contain rounded-lg border border-gray-200"
            loading="lazy"
          />

          {/* Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/90 hover:bg-white text-indigo-700 px-3 py-2 sm:px-4 sm:py-2 rounded-r-lg shadow-md transition"
              >
                ‹
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/90 hover:bg-white text-indigo-700 px-3 py-2 sm:px-4 sm:py-2 rounded-l-lg shadow-md transition"
              >
                ›
              </button>
            </>
          )}

          {/* Dots */}
          {project.images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to image ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    idx === currentIndex ? "bg-indigo-700" : "bg-indigo-200 hover:bg-indigo-400"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line text-base sm:text-lg text-center sm:text-left">
          {project.description}
        </p>

        {/* Tech Stack */}
        <h4 className="text-indigo-700 font-semibold mb-3 text-lg text-center">Tech Stack:</h4>
        <ul className="flex flex-wrap justify-center gap-3 mb-6">
          {project.techStack.map((tech, i) => (
            <li
              key={i}
              className="bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-sm sm:text-base font-medium select-none"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium px-4 py-2 rounded-lg transition shadow-sm"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium px-4 py-2 rounded-lg transition shadow-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
