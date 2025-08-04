import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md transition hover:shadow-lg">
          Project 1
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md transition hover:shadow-lg">
          Project 2
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md transition hover:shadow-lg">
          Project 3
        </div>
      </div>
    </section>
  );
};

export default Projects;
