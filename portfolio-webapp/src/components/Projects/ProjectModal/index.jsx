import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-10 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-6 right-6 text-gray-500 hover:text-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h3 id="modal-title" className="text-center text-4xl font-extrabold text-indigo-800 mb-8">
          {project.title}
        </h3>

        {/* Image Carousel */}
        <div className="relative mb-8">
          <img
            src={project.images[currentIndex]}
            alt={`${project.title} screenshot ${currentIndex + 1}`}
            className="w-full max-h-96 object-contain rounded-lg shadow transition-all duration-300 sm:max-h-[26rem] md:max-h-[28rem] lg:max-h-[32rem] xl:max-h-[36rem]"
            loading="lazy"
          />

          {/* Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-indigo-700 text-white p-3 rounded-full hover:bg-indigo-900 transition"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>
              <button
                onClick={goToNext}
                className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-indigo-700 text-white p-3 rounded-full hover:bg-indigo-900 transition"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>
            </>
          )}

          {/* Dots */}
          {project.images.length > 1 && (
            <div className="flex justify-center gap-3 mt-5">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-3.5 w-3.5 rounded-full transition ${
                    idx === currentIndex ? "bg-indigo-900" : "bg-indigo-300 hover:bg-indigo-600"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-800 mb-8 leading-relaxed whitespace-pre-line text-center md:text-left text-lg">
          {project.description}
        </p>

        {/* Tech Stack */}
        <h4 className="text-indigo-800 font-semibold mb-5 text-xl text-center">Tech Stack:</h4>
        <ul className="flex flex-wrap justify-center gap-4 mb-10">
          {project.techStack.map((tech, i) => (
            <li
              key={i}
              className="bg-indigo-100 text-indigo-900 rounded-full px-4 py-2 text-base font-semibold select-none border border-indigo-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-indigo-700 text-white font-semibold py-3 rounded-md text-center hover:bg-indigo-900 transition shadow-md"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-indigo-700 text-white font-semibold py-3 rounded-md text-center hover:bg-indigo-900 transition shadow-md"
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
