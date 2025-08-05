function SectionTitle({ title }) {
  return (
    <div className="text-center mb-12 px-4 sm:px-6 md:px-0">
      <h2
        className="text-4xl sm:text-5xl md:text-5xl font-semibold leading-tight text-gray-900 dark:text-white"
        style={{
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // optional, adjust for better dark appearance if needed
        }}
      >
        {title}
      </h2>
      <div
        className="mx-auto mt-4 rounded-full"
        style={{
          width: "5rem",
          height: "0.25rem",
          background: "linear-gradient(to right, #373F68, #312E81)", // this already works fine for both modes
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default SectionTitle;
