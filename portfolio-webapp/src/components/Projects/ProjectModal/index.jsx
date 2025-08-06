import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectModal({ project, onClose }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 dark:bg-zinc-900/60 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ overflow: "hidden" }} // Prevent backdrop scroll
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-6xl mt-24 mb-12 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200 dark:border-zinc-700"
          style={{ maxHeight: "85vh", overflowY: "auto", scrollBehavior: "smooth" }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-20 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Title */}
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h2>

            {/* Image Carousel */}
            {project.imageUrls?.length > 0 && (
              <div className="relative">
                {/* Scroll Buttons */}
                <button
                  onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-zinc-700 p-2 rounded-full shadow-md hover:scale-110 transition"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-zinc-700 p-2 rounded-full shadow-md hover:scale-110 transition"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Image Scroll Container */}
                <div
                  ref={scrollRef}
                  className="rounded-lg flex overflow-x-auto gap-4 shadow-md bg-white dark:bg-zinc-800 
                            scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent
                            scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent"
                  style={{ scrollSnapType: "x mandatory" }}
                >
                  {project.imageUrls.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="
                        snap-center
                        flex-shrink-0
                        w-full
                        max-w-[100vw]
                        object-contain
                        rounded-md

                        h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]
                      "
                      style={{ scrollSnapAlign: "center" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4, ease: "easeOut" }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {project.longDescription || project.description}
            </motion.p>

            {/* Tech Stack */}
            {project.stack?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-md rounded-full text-gray-800 dark:text-white"
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
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaGithub size={20} />
                  GitHub
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg inline-flex items-center gap-2 text-green-700 dark:text-green-400 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ExternalLink size={20} />
                  Live Site
                </motion.a>
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
                            src={related.image}
                            alt={related.title}
                            className="
                                w-full
                                object-contain
                                rounded-t-lg

                                h-[180px]          // mobile default height
                                sm:h-[200px]       // small screen (≥640px)
                                md:h-[220px]       // medium screen (≥768px)
                                lg:h-[250px]       // large screen (≥1024px)
                            "
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">
                                {related.title}
                            </h4>
                            <div className="flex gap-3 flex-wrap">
                                {related.github && (
                                    <motion.a
                                        href={related.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline text-lg inline-flex items-center gap-1"
                                        aria-label={`GitHub repository for ${related.title}`}
                                        whileHover={{ scale: 1.1 }}
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
                                        className="text-green-500 hover:underline text-lg inline-flex items-center gap-1"
                                        aria-label={`Live site for ${related.title}`}
                                        whileHover={{ scale: 1.1 }}
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
