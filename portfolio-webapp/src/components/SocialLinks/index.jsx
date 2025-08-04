import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

const SocialLinks = () => {
  const iconSize = 32; // bigger size for better visibility

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
          className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 ease-in-out transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
