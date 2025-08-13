import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaServer,
  FaPalette,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    name: "Frontend Development",
    description:
      "Building responsive, accessible UIs using React, Tailwind CSS, and modern tooling.",
    icon: FaLaptopCode,
  },
  {
    name: "Backend Development",
    description:
      "RESTful APIs and server-side logic using Node.js, Spring Boot, Django and MySQL databases.",
    icon: FaServer,
  },
  {
    name: "Mobile-Friendly Design",
    description:
      "Fully responsive layouts optimized for phones, tablets, and desktops using mobile-first principles.",
    icon: FaMobileAlt,
  },
  {
    name: "UI/UX Design",
    description:
      "Clean, user-friendly interfaces enhanced by wireframes and prototypes in Figma.",
    icon: FaPalette,
  },
  {
    name: "DevOps & Deployment",
    description:
      "CI/CD pipelines, Docker containerization, GitHub Actions, and environment configs.",
    icon: FaCloud,
  },
  {
    name: "Maintenance & Support",
    description:
      "Ongoing site support, updates, refactoring, and performance improvements.",
    icon: FaTools,
  },
];

function ServicesSection() {
  const { darkMode } = useTheme();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-7">
      {services.map(({ name, description, icon: Icon }) => (
        <motion.div
          key={name}
          className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300`}
          style={{
            cursor: "default",
            backgroundColor: darkMode ? "#334155" : "#e0e7ff", // slate-700 / indigo-50 hex for consistency
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          tabIndex={-1} // non-focusable but explicit
          aria-label={name}
        >
          <div className="flex justify-center mb-4">
            <motion.div
              whileHover={{ scale: 1.15 }}
              className={darkMode ? "text-blue-300" : "text-indigo-700"}
              aria-hidden="true"
            >
              <Icon size={48} />
            </motion.div>
          </div>

          <h3
            className={`text-xl sm:text-2xl md:text-2xl font-semibold mb-2 ${
              darkMode ? "text-blue-200" : "text-indigo-800"
            }`}
          >
            {name}
          </h3>

          <p className="text-lg sm:text-xl md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesSection;
