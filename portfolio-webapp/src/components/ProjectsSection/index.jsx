import SectionTitle from "../SectionTitle";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    title: "Pristine Smiles Website",
    description: "A professional, responsive dental clinic website with booking, services, and contact functionality.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    imageUrl: "/projects/pristine.png",
    link: "/projects/pristine-smiles",
  },
  {
    title: "Blockchain Identity App",
    description: "A decentralized identity verification system leveraging Ethereum and smart contracts.",
    stack: ["Solidity", "React", "Web3.js"],
    imageUrl: "/projects/blockchain-id.png",
    link: "/projects/blockchain-identity",
  },
  {
    title: "Curriculum Mapping Tool",
    description: "Helps universities map curriculum outcomes with graduate attributes and industry standards.",
    stack: ["Java", "Spring Boot", "Thymeleaf"],
    imageUrl: "/projects/curriculum.png",
    link: "/projects/curriculum-mapping",
  },
  {
    title: "Mature Mission Website",
    description: "A modern website for an NGO focused on empowering mature women with opportunities.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "/projects/mature.png",
    link: "/projects/mature-mission",
  },
];

const ProjectSection = () => {
  return (
    <section id="Projects" className="w-full bg-indigo-50 dark:bg-[#1e293b] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects" />
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
