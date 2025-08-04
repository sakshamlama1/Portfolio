import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
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

// Helper function for gradient (same as before)
const getGradient = (level) => {
  // ... keep your existing getGradient code ...
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  const rgbToHex = (r, g, b) =>
    "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

  const startColor = hexToRgb("#a5b4fc");
  const endColor = hexToRgb("#312e81");

  const mix = (start, end, weight) => Math.round(start + (end - start) * weight);

  const weight = level / 100;

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

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-white text-center max-w-7xl mx-auto">
      <SectionTitle title="Skills" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map(({ name, level, icon: Icon }) => (
          <motion.div
            key={name}
            className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-default"
            title={`${name} proficiency: ${level}%`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-3">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-indigo-700 text-4xl"
                aria-hidden="true"
              >
                <Icon />
              </motion.div>
            </div>

            <h3 className="text-lg font-semibold text-indigo-700 mb-3">{name}</h3>

            <div className="w-full bg-indigo-200 rounded-full h-4">
              <motion.div
                className="h-4 rounded-full"
                style={{
                  background: getGradient(level),
                }}
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
