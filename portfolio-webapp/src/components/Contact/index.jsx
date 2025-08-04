import { useState } from "react";
import { toast } from "react-toastify";
import SectionTitle from "../SectionTitle";
import "react-toastify/dist/ReactToastify.css";
import SocialLinks from "../../components/SocialLinks";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Basic validation example:
    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/sakshamlama1@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setLoading(false);
        form.reset();
      } else {
        toast.error(result.message || "Oops! Something went wrong.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white text-gray-800 py-24 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto animate-fadeIn"
    >
      <SectionTitle title="Let's Connect" />
      <p className="text-center text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-14">
        Whether you’re looking to collaborate, hire, or just say hello — I’d love
        to hear from you. Drop a message and I’ll get back as soon as I can.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-10 max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-xl"
      >
        {/* Your inputs unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm
                text-base md:text-lg
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-base font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm
                text-base md:text-lg
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-base font-semibold text-gray-700 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="_subject"
            placeholder="Project Collaboration, Job Inquiry, etc."
            className="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm
                text-base md:text-lg
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-base font-semibold text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="8"
            required
            placeholder="Type your message here..."
            className="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm
                text-base md:text-lg
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white text-lg font-semibold py-4 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
          >
            Send Message
          </button>
        </div>
        <div className="mt-20">
          <SocialLinks />
        </div>
      </form>
    </section>
  );
};

export default Contact;
