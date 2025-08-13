import SocialLinks from "../SocialLinks";
import { useTheme } from "../../context/ThemeContext";
import ProfilePicture from "../../assets/ProfilePicture.png";
import "./index.css";

function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      aria-label="Introduction Hero Section"
      className={`
        bg-gradient-to-b 
        ${darkMode
          ? "from-[#0f2027] via-[#203a43] to-[#2c5364]"
          : "from-indigo-50 via-indigo-100 to-indigo-200"}
        ${darkMode ? "text-white" : "text-gray-900"}
        flex items-center justify-center
        pt-[120px] pb-[60px] min-h-screen w-full
      `}
      style={{ scrollMarginTop: "100px" }}
    >
      <div
        className="
          flex flex-col lg:flex-row
          items-center justify-between
          w-full max-w-[1400px]
          px-6 sm:px-10 md:px-14 lg:px-20
          gap-8 sm:gap-10 md:gap-16 lg:gap-24
          pt-6 sm:pt-8 md:pt-10 lg:pt-0
        "
      >
        {/* Left text content */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-xl space-y-6">
          <h1
            className={`
              font-extrabold leading-tight
              text-[clamp(1.875rem,6vw,3.75rem)]    /* fluid: 30px -> 60px */
              ${darkMode ? "text-white drop-shadow-xl" : "text-indigo-900"}
              tracking-tight
            `}
          >
            Hi, I'm Saksham Lama
          </h1>

          {/* Decorative subtitle, hidden from screen readers */}
          <p
            className={`
              font-semibold uppercase tracking-widest
              text-xs sm:text-sm
              ${darkMode ? "text-indigo-300" : "text-indigo-600"}
            `}
            aria-hidden="true"
          >
            Turning ideas into reliable web apps
          </p>

          {/* Main description paragraph */}
          <p
            className={`
              font-medium tracking-wide
              text-base sm:text-lg md:text-xl
              max-w-[400px] sm:max-w-[460px]
              leading-relaxed
              ${darkMode ? "text-indigo-200" : "text-indigo-800"}
            `}
          >
            I build web apps that work for people and businesses — solving real problems with care and reliability. Let’s bring your ideas to life with thoughtful, dependable development.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row w-full max-w-sm sm:max-w-md justify-center lg:justify-start gap-4 mt-6">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-indigo-700 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-semibold text-base sm:text-lg py-4 px-8 rounded-md shadow-lg transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-center"
              aria-label="View projects section"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold text-base sm:text-lg py-4 px-8 rounded-md shadow-lg transition-transform duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-center"
              aria-label="Contact Saksham Lama"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* Right photo & social links */}
        <div className="flex-1 flex flex-col items-center max-w-sm sm:max-w-md lg:max-w-lg">
          <div
            className="flex-shrink-0 overflow-hidden rounded-3xl max-w-[500px] w-full"
            role="img"
            aria-label="Profile picture of Saksham Lama"
          >
            <img
              src={ProfilePicture}
              alt="Saksham Lama"
              className="w-full h-full object-cover animate-fadeIn"
              loading="lazy"  // Lazy load for performance
            />
          </div>

          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-6">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
