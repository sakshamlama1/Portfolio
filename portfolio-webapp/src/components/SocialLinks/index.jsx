import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

function SocialLinks() {
  const { darkMode } = useTheme();

  const baseColor = darkMode ? "text-gray-300" : "text-gray-600";
  const hoverColor = "hover:text-indigo-500 dark:hover:text-indigo-400";

  return (
    <motion.nav
      aria-label="Social media links"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex justify-center gap-8 mt-10"
    >
      {[
        {
          href: "https://www.linkedin.com/in/saksham-lama/",
          label: "LinkedIn",
          icon: <FaLinkedin className="text-4xl sm:text-5xl md:text-5xl" aria-hidden="true" />,
        },
        {
          href: "https://github.com/sakshamlama1",
          label: "GitHub",
          icon: <FaGithub className="text-4xl sm:text-5xl md:text-5xl" aria-hidden="true" />,
        },
        {
          href: "mailto:sakshamlama1@email.com",
          label: "Email",
          icon: <FaEnvelope className="text-4xl sm:text-5xl md:text-5xl" aria-hidden="true" />,
        },
        {
          href: "/SakshamLamaResume.pdf",
          label: "Resume",
          icon: <FaFileAlt className="text-4xl sm:text-5xl md:text-5xl" aria-hidden="true" />,
          download: true,
        },
      ].map(({ href, label, icon, download }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          download={download}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`${baseColor} ${hoverColor} transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none`}
        >
          {icon}
        </motion.a>
      ))}
    </motion.nav>
  );
}

export default SocialLinks;
