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
        text-${darkMode ? "white" : "gray-900"}
        flex items-center justify-center
        pt-[100px] pb-[80px] min-h-screen w-full animate-fadeIn
      `}
    >
      <div
        className="
          flex flex-col lg:flex-row
          items-center justify-between
          w-full max-w-[1200px]
          px-6 sm:px-10 lg:px-20
          gap-12 lg:gap-16
        "
      >
        {/* Left text */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl">
          <h1
            className={`
              font-extrabold leading-tight
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              ${darkMode ? "text-white drop-shadow-xl" : "text-indigo-900"}
            `}
          >
            Hi, I'm Saksham Lama
          </h1>
          <p
            className={`
              font-light tracking-wide
              text-base sm:text-lg md:text-xl lg:text-2xl
              ${darkMode ? "text-indigo-200" : "text-indigo-800"}
            `}
          >
            I'm a software developer with a passion for building scalable web apps and secure digital solutions. 
            I enjoy turning complex problems into clean, efficient code and constantly expanding my skills. 
            Let’s build something meaningful together.
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-sm sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5 mt-6">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-md shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-md shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-center"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* Right photo & social */}
        <div className="flex-1 flex flex-col items-center max-w-md lg:max-w-lg">
          <img
            src={ProfilePicture}
            alt="Saksham Lama"
            loading="lazy"
            className="rounded-2xl shadow-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            style={{ maxHeight: "500px", height: "auto" }}
          />
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
