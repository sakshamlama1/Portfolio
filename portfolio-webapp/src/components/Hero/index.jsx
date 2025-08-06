import SocialLinks from "../SocialLinks";
import { useTheme } from "../../context/ThemeContext";
import ProfilePicture from "../../assets/ProfilePicture.png";
import "./index.css";

function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`
        bg-gradient-to-b 
        ${darkMode
          ? "from-[#0f2027] via-[#203a43] to-[#2c5364]"
          : "from-indigo-50 via-indigo-100 to-indigo-200"}
        ${darkMode ? "text-white" : "text-gray-900"}
        flex items-center justify-center
        pt-[120px] pb-[60px] min-h-[calc(100vh)] w-full
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
        "
      >
        {/* Left text */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-xl space-y-6">
          <h1
            className={`
              font-extrabold leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              ${darkMode ? "text-white drop-shadow-xl" : "text-indigo-900"}
              tracking-tight
            `}
          >
            Hi, I'm Saksham Lama
          </h1>

          <p
            className={`
              font-medium tracking-wide
              text-lg sm:text-xl md:text-2xl
              max-w-[400px] sm:max-w-[460px]
              leading-snug
              ${darkMode ? "text-indigo-200" : "text-indigo-800"}
            `}
          >
            Building scalable web apps & secure digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-sm sm:max-w-md justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-md sm:text-lg md:text-xl py-4 px-9 rounded-md shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold text-md sm:text-lg md:text-xl py-4 px-9 rounded-md shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-center"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* Right photo & social */}
        <div className="flex-1 flex flex-col items-center max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="flex-shrink-0 overflow-hidden rounded-3xl max-w-[500px] w-full">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="w-full h-full object-cover animate-fadeIn"
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
