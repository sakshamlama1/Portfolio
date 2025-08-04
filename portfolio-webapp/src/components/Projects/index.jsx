import { useState } from "react";
import projectData from "./projectData";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../SectionTitle";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = projectData.length;

  function prev() {
    setCurrentIndex((i) => (i === 0 ? length - 1 : i - 1));
  }
  function next() {
    setCurrentIndex((i) => (i === length - 1 ? 0 : i + 1));
  }

  if (length === 0) return null;

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects" />

        <div className="relative max-w-5xl mx-auto">
          <ProjectCard project={projectData[currentIndex]} />

          {length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg text-indigo-800 hover:bg-indigo-100 transition-all p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Previous project"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg text-indigo-800 hover:bg-indigo-100 transition-all p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Next project"
              >
                ›
              </button>
            </>
          )}

          <div className="flex justify-center mt-8 space-x-3">
            {projectData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to project ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? "bg-indigo-900" : "bg-indigo-300 hover:bg-indigo-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
