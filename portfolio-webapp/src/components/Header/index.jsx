import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const sections = ["about", "skills", "projects"];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-50 shadow-md z-[1050] font-semibold text-gray-900">
      <div className="container mx-auto flex items-center justify-between h-[100px] px-6 md:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection(null); // reset active section here
          }}
          className="cursor-pointer"
          aria-label="Homepage"
        >
          <img src={Logo} alt="Logo" className="h-[80px] md:h-[100px] w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setActiveSection(section)}
              className={`no-underline font-semibold transition-all duration-300 ${
                activeSection === section
                  ? "text-indigo-700 text-[1.25rem]" // active style: darker + larger
                  : "text-indigo-900 hover:text-indigo-700 hover:text-[1.15rem]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="no-underline inline-block bg-indigo-900 hover:bg-indigo-700 text-white font-bold text-base py-3 px-7 rounded-md shadow-md transition-transform hover:scale-105 whitespace-nowrap"
          >
            Let’s Connect
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden relative z-[1100] flex items-center justify-center w-10 h-10 focus:outline-none"
        >
          <span
            className={`block absolute h-1 w-8 bg-gray-900 rounded transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-4" : " -translate-y-2 top-3"
            }`}
            style={{ transformOrigin: "center" }}
          />
          <span
            className={`block absolute h-1 w-8 bg-gray-900 rounded transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "top-4"
            }`}
          />
          <span
            className={`block absolute h-1 w-8 bg-gray-900 rounded transform transition duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-4" : " translate-y-2 top-5"
            }`}
            style={{ transformOrigin: "center" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-white shadow-md rounded-b-md px-6 py-6 space-y-4 overflow-hidden transform origin-top transition-all duration-300 ease-in-out absolute left-0 right-0 top-full z-[1040] ${
          menuOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => {
              setMenuOpen(false);
              setActiveSection(section);
            }}
            className={`block no-underline rounded-md px-4 py-3 font-semibold transition-colors duration-300 ${
              activeSection === section
                ? "bg-indigo-100 text-indigo-700 scale-105"
                : "text-gray-900 hover:bg-gray-100 hover:text-indigo-700"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="no-underline block bg-indigo-900 hover:bg-indigo-700 text-white font-bold text-center py-3 rounded-md shadow-md transition-transform hover:scale-105"
        >
          Let’s Connect
        </a>
      </nav>
    </header>
  );
}

export default Header;
