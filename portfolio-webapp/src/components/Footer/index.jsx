import { useTheme } from "../../context/ThemeContext"; // Adjust path if needed

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`w-full ${
        darkMode
          ? "bg-[#0f172a] text-gray-300"
          : "bg-gray-50 text-gray-900"
      } py-6 px-6`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <p className="text-base font-semibold tracking-wide">
          © 2025 Saksham Lama. All rights reserved.
        </p>
        <p className="text-base font-semibold tracking-wide">
          Built with <span className="text-indigo-400">React.js</span> &{" "}
          <span className="text-indigo-400">TailwindCSS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
