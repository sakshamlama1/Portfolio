import { useTheme } from "../../context/ThemeContext";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`w-full ${
        darkMode ? "bg-[#0f172a] text-gray-300" : "bg-gray-50 text-gray-900"
      } py-6 px-6`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-base font-semibold tracking-wide mb-4">
          © 2025 Saksham Lama. All rights reserved.
        </p>

        <p className="text-base font-semibold tracking-wide mb-4">
          Built with{" "}
          <span className="text-indigo-400">React.js</span> &{" "}
          <span className="text-indigo-400">TailwindCSS</span>
        </p>

        <a
          href="https://github.com/your-github-username/your-portfolio-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-500 dark:hover:text-indigo-300 hover:text-indigo-700 font-semibold"
          aria-label="View portfolio source code on GitHub"
        >
          <FaGithub size={20} />
          View Source on GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
