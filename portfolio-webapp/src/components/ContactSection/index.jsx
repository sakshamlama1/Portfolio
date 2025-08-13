import { useState, useRef, useEffect } from "react";
import SectionTitle from "../SectionTitle";
import SocialLinks from "../SocialLinks";
import { useTheme } from "../../context/ThemeContext";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

function ContactSection() {
  const { darkMode } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatusMessage(""); // clear status message on change
  };

  // Focus first invalid input on submit
  const focusFirstErrorField = (errorsObj) => {
    const firstErrorField = Object.keys(errorsObj)[0];
    if (firstErrorField) {
      const element = document.getElementById(firstErrorField);
      element?.focus();
    }
  };

  // Auto-hide status message after 4 seconds
  useEffect(() => {
    if (!statusMessage) return;

    const timer = setTimeout(() => {
      setStatusMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [statusMessage]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage("Please fix the errors in the form.");
      focusFirstErrorField(validationErrors);
      return;
    }

    // Bot check
    if (formData.honeypot) return;

    setIsSubmitting(true);

    try {
      const submissionData = new FormData(formRef.current);
      const res = await fetch("https://formsubmit.co/ajax/sakshamlama1@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: submissionData,
      });

      if (res.ok) {
        formRef.current.reset();
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
        setErrors({});
        setStatusMessage("Thank you! I will get back to you soon.");
      } else {
        const result = await res.json();
        setStatusMessage(result.message || "Message failed. Try again.");
      }
    } catch {
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Shared input class function with indigo error highlight
  const inputClass = (fieldError) =>
    clsx(
      "w-full px-5 py-4 rounded-lg shadow-sm text-md sm:text-lg md:text-xl border focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
      darkMode
        ? "border-gray-600 bg-[#1e293b] text-gray-300 placeholder-gray-500"
        : "border-gray-300 bg-white text-gray-900 placeholder-gray-400",
      fieldError && (darkMode ? "border-indigo-400" : "border-indigo-600")
    );


  return (
    <section
      id="contact"
      className={clsx(
        "w-full py-24 px-6 md:px-12 lg:px-20 animate-fadeIn",
        darkMode ? "bg-[#1e293b] text-gray-300" : "bg-indigo-50 text-gray-900"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Let's Connect" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? {} : { duration: 0.5, delay: 0.2 }}
          className={clsx(
            "text-center text-xl sm:text-2xl md:text-2xl max-w-4xl mx-auto mb-14 leading-relaxed tracking-wide",
            darkMode ? "text-gray-300" : "text-gray-700"
          )}
        >
          Whether you’re looking to collaborate, hire, or just say hello — I’d love to hear from you. Drop a message, and I’ll get back as soon as I can.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? {} : { duration: 0.5, delay: 0.2 }}
          className={clsx(
            "space-y-10 max-w-4xl mx-auto rounded-xl shadow-xl p-8 md:p-12",
            darkMode ? "bg-[#0f172a] shadow-black/40" : "bg-white shadow-gray-300"
          )}
          aria-label="Contact form"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-semibold mb-2 text-md sm:text-lg md:text-xl">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Your name"
              className={inputClass(errors.name)}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-red-500 text-sm" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-2 text-md sm:text-lg md:text-xl">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
              className={inputClass(errors.email)}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-red-500 text-sm" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block font-semibold mb-2 text-md sm:text-lg md:text-xl">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.subject ? "subject-error" : undefined}
              placeholder="Project collaboration, job inquiry, etc."
              className={inputClass(errors.subject)}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1 text-red-500 text-sm" role="alert">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-semibold mb-2 text-md sm:text-lg md:text-xl">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Type your message here..."
              className={inputClass(errors.message)}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-red-500 text-sm" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <AnimatePresence>
            {statusMessage && (
              <motion.div
                key={statusMessage}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                className={clsx(
                  "px-5 py-3 rounded-md border-l-1 mb-4 relative overflow-hidden",
                  statusMessage.includes("Thank you")
                    ? "bg-green-50 border-green-500 text-green-800"
                    : "bg-red-50 border-red-500 text-red-800",
                  darkMode && "bg-gray-800 text-gray-100 border-gray-500"
                )}
                role="alert"
              >
                {statusMessage}
                {/* Progress Bar */}
                <motion.div
                  className={clsx(
                    "absolute bottom-0 left-0 h-1",
                    statusMessage.includes("Thank you")
                      ? "bg-green-500"
                      : "bg-red-500",
                    darkMode && "bg-indigo-500"
                  )}
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 4, ease: "linear" }} // matches your 4s auto-hide
                />
              </motion.div>
            )}
          </AnimatePresence>


          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              aria-label={isSubmitting ? "Sending message" : "Send message"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={prefersReducedMotion ? {} : { duration: 0.2, delay: 0.1 }}
              className={clsx(
                "w-full text-md sm:text-lg md:text-xl font-semibold py-4 rounded-lg transition duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2",
                darkMode ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-indigo-700 hover:bg-indigo-600 text-white"
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="mt-20">
            <SocialLinks />
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
