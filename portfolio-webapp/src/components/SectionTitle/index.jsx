const SectionTitle = ({ title }) => {
  return (
    <div className="text-center mb-12">
      <h2
        className="text-3xl md:text-4xl font-semibold"
        style={{ 
          color: "#0f2027", 
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)" 
        }}
      >
        {title}
      </h2>
      <div
        className="w-20 h-1 mx-auto mt-4 rounded-full"
        style={{
          background: "linear-gradient(to right, #373F68, #312E81)", // indigo-700 to indigo-900 hex
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default SectionTitle;
