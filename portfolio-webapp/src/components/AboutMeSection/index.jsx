import SectionTitle from "../SectionTitle";
import ServicesSection from "../ServicesSection";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="about-me"
      className={`py-24 px-6 sm:px-8 md:px-12 transition-colors duration-300 ${
        darkMode ? "bg-[#0f172a] text-gray-100" : "bg-white text-gray-900"
      }`}
      aria-labelledby="about-me-title"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <SectionTitle title="About Me" id="about-me-title" />

        {/* Intro paragraphs with motion fade-in on scroll */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w mx-auto mt-6 text-xl sm:text-2xl md:text-2xl leading-relaxed tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Hey, I’m Saksham Lama — a full-stack developer passionate about turning ideas into thoughtful, 
          reliable digital experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`max-w mx-auto mt-10 text-xl sm:text-2xl md:text-2xl leading-relaxed tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I started this journey with a deep curiosity for solving problems through code.
          Since then, I’ve built clean interfaces, scalable backends, and full-stack applications 
          that are both user-friendly and robust.
        </motion.p>
                
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`max-w mx-auto mt-10 text-xl sm:text-2xl md:text-2xl leading-relaxed tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I care about writing code that lasts — maintainable, scalable, and built with real people in mind. 
          Whether it’s a personal project, a startup MVP, or contributing to a larger team, I bring care, 
          clarity, and accountability to every line I write. Let’s build something meaningful together.
        </motion.p>

        {/* Services subtitle with accessible heading */}
        <motion.h3
          id="what-i-offer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`mt-14 mb-8 font-semibold relative text-3xl sm:text-4xl md:text-4xl leading-snug ${
            darkMode ? "text-blue-300" : "text-indigo-800"
          }`}
          style={{ paddingBottom: "1rem" }}
        >
          What I Offer
          <div
            className={`absolute bottom-0 left-1/2 h-1 rounded-full ${
              darkMode ? "bg-blue-400" : "bg-indigo-500"
            }`}
            style={{
              width: "5rem",
              height: "0.25rem",
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />
        </motion.h3>

        {/* Services Section Component */}
        <ServicesSection />

        {/* Action Buttons */}
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-center gap-10 mt-14 px-4 sm:px-0">
          <a
            href="#projects"
            className="
              w-full sm:w-[50%] 
              bg-indigo-700 hover:bg-indigo-600
              dark:bg-indigo-600 dark:hover:bg-indigo-700
              text-white font-semibold 
              text-lg sm:text-xl md:text-2xl 
              py-4 px-8 rounded-md shadow-lg 
              transition-transform duration-300 ease-in-out 
              hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400 
              text-center
            "
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="
              w-full sm:w-[50%] 
              bg-gray-300 hover:bg-gray-400 
              dark:bg-gray-700 dark:hover:bg-gray-600 
              text-gray-900 dark:text-white 
              font-semibold 
              text-lg sm:text-xl md:text-2xl 
              py-4 px-8 rounded-md shadow-lg 
              transition-transform duration-300 ease-in-out 
              hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400 
              text-center
            "
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
