import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { useTheme } from "../../context/ThemeContext";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaServer,
  FaPalette,
  FaTools,
} from "react-icons/fa";

// Services list
const services = [
  {
    name: "Frontend Development",
    description: "Building responsive, accessible UIs using React, Tailwind, and modern tooling.",
    icon: FaLaptopCode,
  },
  {
    name: "Backend Development",
    description: "RESTful APIs and server-side logic using Node.js, Spring Boot, and databases.",
    icon: FaServer,
  },
  {
    name: "Mobile-Friendly Design",
    description: "Fully responsive designs optimised for phones, tablets, and desktops.",
    icon: FaMobileAlt,
  },
  {
    name: "UI/UX Design",
    description: "Clean, user-friendly interfaces that enhance user engagement and experience.",
    icon: FaPalette,
  },
  {
    name: "DevOps & Deployment",
    description: "CI/CD pipelines, GitHub Actions, cloud deployment, and environment configs.",
    icon: FaCloud,
  },
  {
    name: "Maintenance & Support",
    description: "Ongoing site support, updates, refactoring, and performance improvements.",
    icon: FaTools,
  },
];

function ServicesSection() {
  const { darkMode } = useTheme();

  return (
    <section
      id="services"
      className={`py-24 px-4 text-center transition-colors duration-300 ${
        darkMode ? "bg-[#0f172a] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Services" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
          {services.map(({ name, description, icon: Icon }) => (
            <motion.div
              key={name}
              className={`rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-default ${
                darkMode ? "bg-slate-700" : "bg-indigo-50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-3">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`text-4xl ${
                    darkMode ? "text-blue-300" : "text-indigo-700"
                  }`}
                  aria-hidden="true"
                >
                  <Icon />
                </motion.div>
              </div>

              <h3
                className={`text-lg font-semibold mb-2 ${
                  darkMode ? "text-blue-200" : "text-indigo-700"
                }`}
              >
                {name}
              </h3>

              <p className="text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
