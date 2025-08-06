import { useState } from "react";
import { NavLink } from "react-router-dom";
import LightLogo from "../../assets/LightLogo.png";
import DarkLogo from "../../assets/DarkLogo.png";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const { darkMode } = useTheme();

  const sections = ["about-me", "skills", "projects"];

  return (
    <header
      className={`fixed top-0 left-0 w-full shadow-md z-[1050] font-semibold transition-colors duration-300
        ${
          darkMode
            ? "bg-[#0f172a] text-white" // lighter blue shade for dark mode bg
            : "bg-gray-50 text-gray-900"
        }
      `}
    >
      <div className="container mx-auto flex items-center justify-between h-[100px] px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection(null);
          }}
          className="cursor-pointer flex-shrink-0 max-w-[160px]"
          aria-label="Homepage"
        >
          {/* Light Mode Logo */}
          <img
            loading="lazy"
            src={LightLogo}
            alt="Logo"
            className="h-[100px] md:h-[100px] w-auto block dark:hidden"
          />

          {/* Dark Mode Logo */}
          <img
            loading="lazy"
            src={DarkLogo}
            alt="Logo"
            className="h-[100px] md:h-[100px] w-auto hidden dark:block"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center items-center space-x-8 2xl:space-x-12 text-lg xl:text-xl self-center mt-[6px]">
          {sections.map((section) => {
            // Format the display text
            const displayDesktopText =
              section.toLowerCase() === "about-me"
                ? "About Me"
                : section.charAt(0).toUpperCase() + section.slice(1);

            return (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                aria-current={activeSection === section ? "page" : undefined}
                className={`relative pb-2 transition-colors duration-200
                    ${
                      activeSection === section
                        ? "text-indigo-800 dark:text-indigo-300 border-b-[4px] border-indigo-600 dark:border-indigo-400 font-semibold"
                        : "text-indigo-900 dark:text-indigo-200 hover:text-indigo-700 dark:hover:text-indigo-400"
                    }
                    ${
                      activeSection !== section &&
                      "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-0 hover:after:w-full after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-all after:duration-300"
                    }
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                  `}
                tabIndex={0}
              >
                {displayDesktopText}
              </a>
            );
          })}
        </nav>

        {/* Right CTA + Dark Mode Toggle */}
        <div className="hidden lg:flex items-center gap-4 pl-6 flex-shrink-0">
          <a
            href="#contact"
            className={`no-underline font-bold text-sm xl:text-lg py-2.5 px-5 rounded-md shadow-md whitespace-nowrap
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
              transition-colors duration-300
              ${darkMode
                ? "bg-indigo-900 hover:bg-indigo-700 text-white"
                : "bg-indigo-700 hover:bg-indigo-900 text-white"
              }`}
          >
            Let’s Connect
          </a>
          <ThemeToggle />
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden relative z-[1100] flex items-center justify-center w-10 h-10 focus:outline-none"
        >
          <span
            className={`block absolute h-1 w-8 bg-gray-900 dark:bg-white rounded transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-4" : "-translate-y-2 top-3"
            }`}
            style={{ transformOrigin: "center" }}
          />
          <span
            className={`block absolute h-1 w-8 bg-gray-900 dark:bg-white rounded transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "top-4"
            }`}
          />
          <span
            className={`block absolute h-1 w-8 bg-gray-900 dark:bg-white rounded transform transition duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-4" : "translate-y-2 top-5"
            }`}
            style={{ transformOrigin: "center" }}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden bg-white dark:bg-[#1e293b] shadow-md rounded-b-md px-6 py-6 space-y-4 overflow-hidden transform origin-top transition-all duration-300 ease-in-out absolute left-0 right-0 top-full z-[1040] ${
          menuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {sections.map((section) => {
          const displayText =
            section.toLowerCase() === "about-me"
              ? "About Me"
              : section.charAt(0).toUpperCase() + section.slice(1);

          return (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => {
                setMenuOpen(false);
                setActiveSection(section);
              }}
              className={`block w-full no-underline rounded-md px-4 py-3 font-semibold text-base transition-colors duration-300
                ${
                  activeSection === section
                    ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-white"
                    : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-indigo-700 hover:text-indigo-700"
                }
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
              `}
              tabIndex={0}
            >
              {displayText}
            </a>
          );
        })}

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`block w-full no-underline rounded-md px-4 py-3 font-semibold text-center transition-colors
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
            ${darkMode
              ? "bg-indigo-900 hover:bg-indigo-700 text-white"
              : "bg-indigo-700 hover:bg-indigo-900 text-white"
            }`}
          tabIndex={0}
        >
          Let’s Connect
        </a>


        {/* Dark Mode Toggle for mobile */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end pr-4">
          <ThemeToggle mobile={true} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
