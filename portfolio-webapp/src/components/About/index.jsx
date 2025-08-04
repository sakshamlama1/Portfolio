import SectionTitle from "../SectionTitle";

function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gray-100 text-center">
      <SectionTitle title="About Me" />
      <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
        A brief introduction about who you are, what you do, and what you're passionate about.
      </p>
    </section>
  );
}

export default About;
