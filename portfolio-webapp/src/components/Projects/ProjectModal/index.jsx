import { useEffect, useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({ project, onClose }) {
  const scrollRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (!project) return;

    // Close modal with Escape key
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);

    // Trap focus in modal
    const focusableEls = scrollRef.current?.closest('[role="dialog"]')?.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableEls?.[0];
    const lastEl = focusableEls?.[focusableEls.length - 1];

    const trapFocus = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    window.addEventListener("keydown", trapFocus);

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Focus close button on open
    closeButtonRef.current?.focus();
    
    // Detect touch capability
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("keydown", trapFocus);
      document.body.style.overflow = "auto";
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        className="fixed inset-0 z-[9998] flex items-start justify-center bg-black bg-opacity-50 dark:bg-zinc-900/60 backdrop-blur-sm p-4"
        style={{ pointerEvents: "auto" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-6xl mb-12 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700 mt-[100px] overflow-y-auto"
          style={{ maxHeight: "calc(95vh - 100px)", scrollBehavior: "smooth" }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-6" aria-hidden="true" />
          {/* Close Button */}
          <button
            className="absolute top-0 right-0 mt-1 mr-1 sm:mt-1.5 sm:mr-2 md:mt-2 md:mr-3
                      z-20 text-gray-600 dark:text-gray-300
                      hover:bg-gray-200 dark:hover:bg-zinc-700
                      p-2 rounded-full focus:outline-none
                      focus-visible:ring-2 focus-visible:ring-indigo-500"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Title */}
            <motion.h2
              id="project-modal-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h2>

            {/* Role & Duration */}
            <div className="flex justify-center mb-6">
              <div className="flex flex-col sm:flex-row sm:gap-8 text-gray-600 dark:text-gray-400 text-center sm:text-left text-base sm:text-lg md:text-xl">
                <div><strong>Role:</strong> {project.role}</div>
                <div><strong>Duration:</strong> {project.duration}</div>
              </div>
            </div>

            {/* Swipe Prompt */}
            {isTouchDevice && project.imageUrls?.length > 1 && (
              <p
                className="text-center text-xs sm:text-sm text-gray-200 bg-black/60 px-3 py-1 rounded-full w-max mx-auto"
                aria-label="Swipe to view more images"
              >
                Swipe to view more images →
              </p>
            )}

            {/* Image Carousel */}
            {project.imageUrls?.length > 0 && (
              <div className="relative">
                <div
                  ref={scrollRef}
                  className="rounded-lg flex overflow-x-auto gap-4 shadow-md bg-white dark:bg-zinc-800 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent"
                >
                  {project.imageUrls.map((img, index) => (
                    <div
                      key={index}
                      className="snap-center flex-shrink-0 w-full rounded-md overflow-hidden border border-gray-300 dark:border-zinc-700 shadow-sm bg-white dark:bg-zinc-900 flex items-center justify-center"
                    >
                      <motion.img
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeOut" }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <motion.p
              id="project-modal-description"
              className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {project.longDescription || project.description}
            </motion.p>

            {/* Challenges */}
            {project.challenges?.length > 0 && (
              <section>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Challenges
                </h3>
                <ul className="list-disc list-inside text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 space-y-1">
                  {project.challenges.map((point, i) => (
                    <li key={i}>{point.trim()}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Features */}
            {project.features?.length > 0 && (
              <section>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Features
                </h3>
                <ul className="list-disc list-inside text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech Stack */}
            {project.stack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-200 dark:bg-gray-700 text-sm sm:text-md rounded-full text-gray-800 dark:text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * idx + 0.3, duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              
              {project.live === "Upcoming" ? (
                <div className="text-sm italic text-gray-500 dark:text-gray-400 mt-1 text-center">
                  Live site under development — releasing soon!
                </div>
              ) : (
                (project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={18} />
                    GitHub
                  </motion.a>
                )) ||
                (project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg inline-flex items-center gap-2 text-green-700 dark:text-green-400 hover:underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    Live Site
                  </motion.a>
                ))
              )}

              {project.confidential && (
                <div className="text-sm italic text-gray-500 dark:text-gray-400 text-center">
                  {project.confidential}
                </div>
              )}
            </div>

            {/* Related Work */}
            {project.relatedPages && project.relatedPages.length > 0 && (
              <div className="mt-6">
                <motion.h3
                  className="text-3xl font-semibold mb-6 text-center text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Related Work
                </motion.h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.relatedPages.map((related, index) => (
                    <motion.div
                      key={index}
                      role="dialog"
                      aria-modal="true"
                      className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-zinc-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeOut" }}
                    >
                      <img
                        src={related.imageUrls?.[0] || "/placeholder-image.png"}
                        alt={`${related.title} screenshot`}
                        className="
                          w-full
                          h-auto
                          object-contain
                          rounded-t-lg
                        "
                      />
                      <div className="p-4">
                        <h4 className="text-lg sm:text-xl font-medium mb-2 text-gray-900 dark:text-white">
                          {related.title}
                        </h4>
                        <div className="flex gap-3 flex-wrap">
                          {related.github && (
                            <motion.a
                              href={related.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline text-lg inline-flex items-center gap-1 px-1 py-0.5"
                              aria-label={`GitHub repository for ${related.title}`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaGithub size={18} />
                              GitHub
                            </motion.a>
                          )}
                          {related.live && (
                            <motion.a
                              href={related.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-500 hover:underline text-lg inline-flex items-center gap-1 px-1 py-0.5"
                              aria-label={`Live site for ${related.title}`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink size={18} />
                              Live Site
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
