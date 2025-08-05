import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function SocialLinks() {
  const { darkMode } = useTheme();
  const iconSize = 40;

  // Define base and hover colors based on theme
  const baseColor = darkMode ? "text-gray-300" : "text-gray-600";
  const hoverColor = "hover:text-indigo-500 dark:hover:text-indigo-400";

  return (
    <div className="flex justify-center gap-8 mt-10">
      {[
        {
          href: "https://www.linkedin.com/in/saksham-lama/",
          label: "LinkedIn",
          icon: <FaLinkedin size={iconSize} />,
        },
        {
          href: "https://github.com/sakshamlama1",
          label: "GitHub",
          icon: <FaGithub size={iconSize} />,
        },
        {
          href: "mailto:sakshamlama1@email.com",
          label: "Email",
          icon: <FaEnvelope size={iconSize} />,
        },
        {
          href: "/SakshamLamaResume.pdf",
          label: "Resume",
          icon: <FaFileAlt size={iconSize} />,
          download: true,
        },
      ].map(({ href, label, icon, download }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          download={download}
          className={`${baseColor} ${hoverColor} transition-colors duration-200 ease-in-out transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
