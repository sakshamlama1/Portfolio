import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ className = "", mobile = false }) => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle dark mode"
      type="button"
      className={`relative inline-flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full transition ${className}`}
      style={{
        width: mobile ? "72px" : "80px",
        height: mobile ? "36px" : "40px",
      }}
    >
      {/* Track */}
      <span
        className={`block w-full h-full rounded-full transition-colors duration-300 ease-in-out ${
          darkMode ? "bg-indigo-700" : "bg-gray-300"
        }`}
      >
        {/* Icons inside track */}
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-yellow-400 pointer-events-none">
          <Moon size={mobile ? 18 : 20} aria-hidden="true" />
        </span>
        <span
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none ${
            darkMode ? "text-yellow-400" : "text-gray-600"
          }`}
        >
          <Sun size={mobile ? 18 : 20} aria-hidden="true" />
        </span>
      </span>

      {/* Thumb */}
      <span
        className={`absolute top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
          darkMode ? `translate-x-[calc(100%+4px)]` : "translate-x-1"
        }`}
        style={{
          width: mobile ? "32px" : "36px",
          height: mobile ? "32px" : "36px",
        }}
      />
    </button>
  );
};

export default ThemeToggle;
