import { ArrowRight } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onSelect }) => {
  const { title, blurb, stack, imageUrls } = project;
  const { darkMode } = useTheme();

  // Handles click or keyboard activation (Enter/Space) on the card
  const handleClick = () => onSelect?.();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Project card: ${title}`}
      className={`max-w-xl sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl w-full cursor-pointer 
        rounded-lg overflow-hidden shadow-md hover:shadow-lg 
        transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500
        ${darkMode ? "bg-slate-700" : "bg-indigo-50"} 
        flex flex-col h-full`}
    >
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-t">
        {/* Blurred decorative background */}
        <img
          src={imageUrls[0]}
          alt="" // Decorative background - hidden from screen readers
          className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />

        {/* Main project image */}
        <img
          src={imageUrls[0]}
          alt={`Screenshot of ${title} project`}
          className="relative z-10 w-full h-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title and blurb */}
        <header className="mb-6">
          <h3
            className={`text-lg sm:text-xl md:text-2xl font-semibold mb-3 ${
              darkMode ? "text-blue-200" : "text-indigo-700"
            }`}
          >
            {title}
          </h3>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 line-clamp-3 mb-4">
            {blurb}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-3">
            {stack.map((tech) => (
              <span
                key={tech}
                className={`text-sm sm:text-md md:text-lg px-3 py-1 rounded font-medium 
                  ${darkMode ? "bg-slate-600 text-slate-200" : "bg-indigo-200 text-indigo-900"}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* View More Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className={`mt-auto py-3 rounded-md text-sm sm:text-md md:text-lg px-3 font-semibold 
            transition-colors duration-300 w-full sm:w-auto
            ${darkMode
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-indigo-700 hover:bg-indigo-600 text-white"
            }`}
          type="button"
          aria-label={`View more details about ${title}`}
        >
          View More <ArrowRight className="inline ml-2" size={18} />
        </motion.button>
      </div>
    </article>
  );
};

export default ProjectCard;
