import { useState } from "react";
import { toast } from "react-toastify";
import SectionTitle from "../SectionTitle";
import "react-toastify/dist/ReactToastify.css";
import SocialLinks from "../SocialLinks";
import { useTheme } from "../../context/ThemeContext";

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
        <p
          className={`text-center text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-14 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Whether you’re looking to collaborate, hire, or just say hello — I’d love
          to hear from you. Drop a message and I’ll get back as soon as I can.
        </p>

        <form
          onSubmit={handleSubmit}
          className={`space-y-10 max-w-4xl mx-auto rounded-xl shadow-xl p-8 md:p-12
            ${darkMode ? "bg-[#0f172a] shadow-black/40" : "bg-white shadow-gray-300"}
          `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className={`block text-base font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className={`w-full px-5 py-4 rounded-lg shadow-sm text-base md:text-lg
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
                className={`block text-base font-semibold mb-2 ${
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
                className={`w-full px-5 py-4 rounded-lg shadow-sm text-base md:text-lg
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
              className={`block text-base font-semibold mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="_subject"
              placeholder="Project Collaboration, Job Inquiry, etc."
              className={`w-full px-5 py-4 rounded-lg shadow-sm text-base md:text-lg
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
              className={`block text-base font-semibold mb-2 ${
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
              className={`w-full px-5 py-4 rounded-lg shadow-sm text-base md:text-lg
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
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white text-lg font-semibold py-4 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          <div className="mt-20">
            <SocialLinks />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
