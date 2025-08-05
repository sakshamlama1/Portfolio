import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // or Next.js routing if using Next

const ProjectCard = ({ project }) => {
  const { title, description, stack, imageUrl, link } = project;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-[1.02] bg-gray-50 dark:bg-[#0f172a] hover:shadow-xl"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-indigo-200 dark:bg-slate-600 text-indigo-900 dark:text-slate-200 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end mt-4 text-indigo-700 dark:text-indigo-300 hover:underline">
          <span className="mr-1 text-sm">View more</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
