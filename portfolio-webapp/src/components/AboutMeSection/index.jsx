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
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <SectionTitle title="About Me" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w mx-auto mt-6 text-xl sm:text-2xl md:text-2xl leading-relaxed tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I'm a full-stack developer who thrives on transforming complex ideas
          into simple, efficient, and user-friendly digital solutions. Whether it's
          frontend finesse, backend logic, or full deployment — I deliver end-to-end
          web experiences tailored for modern users and scalable systems.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w mx-auto mt-12 text-xl sm:text-2xl md:text-2xl leading-relaxed tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          My journey started with a passion for coding and problem-solving, which has
          grown into a career dedicated to creating impactful software. I continuously
          strive to learn new technologies and best practices to improve every project.
        </motion.p>

        {/* Services subtitle */}
        <h3
            className={`mt-14 mb-4 font-semibold inline-block relative
                text-3xl sm:text-4xl md:text-4xl leading-snug
                ${darkMode ? "text-blue-300" : "text-indigo-800"}
            `}
            style={{ paddingBottom: "1rem" }}
        >
            What I Offer
            <div
              className={`absolute bottom-0 h-1 rounded-full ${
                darkMode ? "bg-blue-400" : "bg-indigo-500"
              }`}
              style={{
                width: "5rem",
                height: "0.25rem",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              aria-hidden="true"
            />
        </h3>

        <ServicesSection />
      </div>
    </section>
  );
};

export default AboutMeSection;
