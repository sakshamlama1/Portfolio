import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import { useTheme } from "../../context/ThemeContext";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", level: 50, icon: SiJavascript },
  { name: "React", level: 60, icon: SiReact },
  { name: "Tailwind CSS", level: 70, icon: SiTailwindcss },
  { name: "Node.js", level: 75, icon: SiNodedotjs },
  { name: "Spring Boot", level: 80, icon: SiSpringboot },
  { name: "MySQL", level: 85, icon: SiMysql },
];

const getGradient = (level, darkMode) => {
  // Gradients matching ContactSection's theme blues
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  const rgbToHex = (r, g, b) =>
    "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

  // Light mode: from indigo-300 to indigo-700 (similar to ContactSection's blues)
  const lightStart = hexToRgb("#a5b4fc"); // indigo-300
  const lightEnd = hexToRgb("#4338ca");   // indigo-700 darker shade

  // Dark mode: from blue-300 to blue-600 (similar to ContactSection)
  const darkStart = hexToRgb("#60a5fa");  // blue-400-ish
  const darkEnd = hexToRgb("#2563eb");    // blue-600

  const startColor = darkMode ? darkStart : lightStart;
  const endColor = darkMode ? darkEnd : lightEnd;

  const weight = level / 100;
  const mix = (start, end, weight) => Math.round(start + (end - start) * weight);

  const colorStart = rgbToHex(
    mix(startColor[0], endColor[0], weight),
    mix(startColor[1], endColor[1], weight),
    mix(startColor[2], endColor[2], weight)
  );

  const colorEnd = rgbToHex(
    mix(startColor[0], endColor[0], Math.min(weight + 0.2, 1)),
    mix(startColor[1], endColor[1], Math.min(weight + 0.2, 1)),
    mix(startColor[2], endColor[2], Math.min(weight + 0.2, 1))
  );

  return `linear-gradient(90deg, ${colorStart} 0%, ${colorEnd} 100%)`;
};

function SkillsSection() {
  const { darkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`py-24 px-4 text-center transition-colors duration-300 ${
        darkMode ? "bg-[#1e293b] text-gray-300" : "bg-indigo-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Skills" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-3xl mx-auto mt-4 mb-10 text-xl sm:text-2xl md:text-2xl leading-relaxed tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Here are some of the key technologies and tools I’m proficient in, honed through real projects and continuous learning.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {skills.map(({ name, level, icon: Icon }) => (
            <motion.div
              key={name}
              className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default ${
                darkMode ? "bg-[#0f172a] text-gray-300" : "bg-white text-gray-900"
              }`}
              title={`${name} proficiency: ${level}%`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-3">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`text-5xl sm:text-6xl md:text-6xl ${
                    darkMode ? "text-blue-400" : "text-indigo-700"
                  }`}
                  aria-hidden="true"
                >
                  <Icon />
                </motion.div>
              </div>

              <h3
                className={`text-xl sm:text-2xl md:text-2xl font-semibold mb-3 ${
                  darkMode ? "text-blue-300" : "text-indigo-800"
                }`}
              >
                {name}
              </h3>

              <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-4">
                <motion.div
                  className="h-4 rounded-full"
                  style={{
                    background: getGradient(level, darkMode),
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
