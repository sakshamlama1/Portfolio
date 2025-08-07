import { useState } from "react";
import { toast } from "react-toastify";
import SectionTitle from "../SectionTitle";
import "react-toastify/dist/ReactToastify.css";
import SocialLinks from "../SocialLinks";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

function ContactSection() {
  const [loading, setLoading] = useState(false);
  const { darkMode } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/sakshamlama1@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(result.message || "Oops! Something went wrong.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`w-full py-24 px-6 md:px-12 lg:px-20 animate-fadeIn
        ${darkMode ? "bg-[#1e293b] text-gray-300" : "bg-indigo-50 text-gray-900"}
      `}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Let's Connect" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-center text-xl sm:text-2xl md:text-2xl max-w-4xl mx-auto mb-14 leading-relaxed tracking-wide ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Whether you’re looking to collaborate, hire, or just say hello — I’d love to hear from you. 
          Drop a message, and I’ll get back as soon as I can.
        </motion.p>

        {/* Aria-live region for screen readers */}
        <div aria-live="polite" className="sr-only" />

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className={`space-y-10 max-w-4xl mx-auto rounded-xl shadow-xl p-8 md:p-12
            ${darkMode ? "bg-[#0f172a] shadow-black/40" : "bg-white shadow-gray-300"}
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className={`block font-semibold mb-2 
                  text-md sm:text-lg md:text-xl 
                  ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                className={`w-full px-5 py-4 rounded-lg shadow-sm text-md sm:text-lg md:text-xl
                  border focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                  ${
                    darkMode
                      ? "border-gray-600 bg-[#1e293b] text-gray-300 placeholder-gray-500"
                      : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
                  }
                `}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-md sm:text-lg md:text-xl font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className={`w-full px-5 py-4 rounded-lg shadow-sm text-md sm:text-lg md:text-xl
                  border focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                  ${
                    darkMode
                      ? "border-gray-600 bg-[#1e293b] text-gray-300 placeholder-gray-500"
                      : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
                  }
                `}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className={`block text-md sm:text-lg md:text-xl font-semibold mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="_subject"
              placeholder="Project collaboration, job inquiry, etc."
              className={`w-full px-5 py-4 rounded-lg shadow-sm text-md sm:text-lg md:text-xl
                border focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                ${
                  darkMode
                    ? "border-gray-600 bg-[#1e293b] text-gray-300 placeholder-gray-500"
                    : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
                }
              `}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-md sm:text-lg md:text-xl font-semibold mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              required
              placeholder="Type your message here..."
              className={`w-full px-5 py-4 rounded-lg shadow-sm text-md sm:text-lg md:text-xl
                border focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                ${
                  darkMode
                    ? "border-gray-600 bg-[#1e293b] text-gray-300 placeholder-gray-500"
                    : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"
                }
              `}
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              disabled={loading}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className={`w-full text-md sm:text-lg md:text-xl font-semibold py-4 rounded-lg transition duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2
              ${
                darkMode 
                  ? "bg-indigo-900 hover:bg-indigo-700 text-white" 
                  : "bg-indigo-700 hover:bg-indigo-900 text-white"}`}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </div>

          <div className="mt-20">
            <SocialLinks />
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
