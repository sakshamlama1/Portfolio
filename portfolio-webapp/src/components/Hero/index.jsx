import React from 'react';

function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 drop-shadow-md">
        Hi, I'm Saksham
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide">
        A passionate Software Developer
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-700 transition"
      >
        View Projects
      </a>
    </section>
  );
}

export default Hero;
