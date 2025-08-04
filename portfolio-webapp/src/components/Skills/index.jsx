import React from 'react';

function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Spring Boot",
    "SQL",
  ];
  
  return (
    <section id="skills" className="py-24 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>
      <ul className="flex justify-center flex-wrap gap-4 list-none p-0 m-0">
        {skills.map((skill, index) => (
          <li
            key={skill}
            className="bg-indigo-100 text-indigo-800 rounded-md px-5 py-3 font-medium shadow-sm hover:bg-indigo-200 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;