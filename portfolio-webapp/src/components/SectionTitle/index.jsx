import { motion } from "framer-motion";

function SectionTitle({ title }) {
  return (
    <motion.div
      className="text-center mb-12 px-4 sm:px-6 md:px-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2
        className="text-4xl sm:text-5xl md:text-5xl font-semibold leading-tight text-gray-900 dark:text-white"
      >
        {title}
      </h2>

      <div
        className="mx-auto mt-4 rounded-full w-20 h-1"
        style={{
          background: "linear-gradient(to right, #373F68, #312E81)",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default SectionTitle;
