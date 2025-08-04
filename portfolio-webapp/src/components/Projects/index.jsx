import { useState } from "react";
import projectData from "./projectData";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../SectionTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <ProjectCard project={projectData[currentIndex]} />

          {length > 1 && (
            <>
              <button
                onClick={prev}
                className="hidden sm:block absolute left-4 md:left-10 lg:left-20 top-1/2 -translate-y-1/2 z-10 bg-indigo-700 text-white p-3 rounded-full hover:bg-indigo-900 transition"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>

              <button
                onClick={next}
                className="hidden sm:block absolute right-4 md:right-10 lg:right-20 top-1/2 -translate-y-1/2 z-10 bg-indigo-700 text-white p-3 rounded-full hover:bg-indigo-900 transition"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
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
